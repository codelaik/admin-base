import { Request, Response } from 'express'
import Logger from '../logger'
import * as _ from 'lodash'
import bcrypt from 'bcryptjs'
import db from '../prisma'
import { AUDIT_TYPE, ResponseStatus } from '../../types'
import jwt from 'jsonwebtoken'
import { Role, User } from '@prisma/client'
import { addAuditLog } from '../Audit/audit'
import { encrypt, exclude } from '../../utils'

const secretOrKey = process.env.SECRET_OR_KEY

export const emailAvailability = async (req: Request, res: Response) => {
    const emailExists: Partial<User> | null = await db.user.findUnique({
        where: { email: req.body.email },
    })
    if (!!emailExists) {
        res.json({
            available: false,
        })
        return
    }
    res.json({ available: true })
}

const getAdminUsersRoles = [Role.SUPER_ADMIN, Role.ADMIN]
export const getAdminUsers = async (req: Request, res: Response) => {
    const initilizingUser = req.user as User
    const userRole = initilizingUser.role
    if (!userRole || !getAdminUsersRoles.some((role) => role === userRole)) {
        res.status(500).json({
            status: ResponseStatus.FAILED,
            errorMessage: 'Insuffient User Persmissions',
        })
        return
    }

    //checks if the user has proper permissions and showDisabled was set to true
    const shouldShowDisabled =
        userRole === Role.SUPER_ADMIN && !!req.body.showDisabled

    //if value is true, all users are returned. If false, on NON disabled users are shown
    const rawUsers = await db.user.findMany(
        shouldShowDisabled
            ? undefined
            : {
                  where: {
                      disabled: false,
                  },
              }
    )
    const parsedUsers = rawUsers.map((user) => exclude(user, 'password'))

    const userObject = _.keyBy(parsedUsers, 'id')

    res.json({ ...userObject })
}

const createUserBase = async (user: Partial<User>) => {
    const userExists: User | null = await db.user.findUnique({
        where: { email: user.email },
    })
    if (!!userExists) return false

    const encryptedPassword = await encrypt(user.password as string)
    const savedUser = await db.user.create({
        data: {
            username: user.username as string,
            email: user.email as string,
            role: user.role as Role,
            password: encryptedPassword,
            disabled: false,
        },
    })
    return savedUser
}

export const createUserAsAdmin = async (req: Request, res: Response) => {
    const adminUser = req.user as User

    const newUser: Partial<User> = {
        ...req.body,
        disabled: false,
    }
    console.log(req.body)
    const savedUser = await createUserBase(newUser)

    if (!savedUser) {
        res.status(500).json({
            status: ResponseStatus.FAILED,
            errorMessage: 'Failed to create User',
        })
        return
    }

    await addAuditLog(adminUser, AUDIT_TYPE.CREATED_ACCOUNT, savedUser.email)

    res.json({
        status: ResponseStatus.SUCCESS,
        user: exclude(savedUser, 'password'),
    })
}

export const createUser = async (req: Request, res: Response) => {
    const savedUser = await createUserBase(req.body)
    if (!savedUser) {
        res.status(500).json({
            status: ResponseStatus.FAILED,
            errorMessage: 'Email Already Taken',
        })
        return
    }
    const payload = { id: savedUser.id, username: savedUser.username }
    jwt.sign(
        payload,
        secretOrKey as string,
        {},
        (_: Error | null, token?: string) => {
            res.json({
                status: ResponseStatus.SUCCESS,
                token: 'Bearer ' + token,
                user: exclude(savedUser, 'password'),
            })
        }
    )
}

export const loginUser = async (req: Request, res: Response) => {
    const loginInfo: { email: string; password: string } = req.body
    const user: User | null = await db.user.findUnique({
        where: { email: loginInfo.email },
    })
    if (!user || user.disabled) {
        res.status(500).json({ error: 'Email not found' })
        return
    }

    const isMatch = await bcrypt.compare(
        loginInfo.password,
        user.password || ''
    )
    if (!isMatch) {
        res.status(500).json({
            status: ResponseStatus.FAILED,
            error: 'Incorrect Password',
        })
        return
    }
    const payload = { id: user.id, username: user.username }

    jwt.sign(
        payload,
        secretOrKey as string,
        {},
        (_: Error | null, token?: string) => {
            res.json({
                status: ResponseStatus.SUCCESS,
                token: 'Bearer ' + token,
                user: exclude(user, 'password'),
            })
        }
    )
}

export const getUser = (req: Request, res: Response) => {
    const user = req.user as User
    if (!user || user.disabled) {
        Logger.warn('No current User found')
        res.status(500).json({
            errorMessage: 'No Current User Found',
        })
        return
    }
    res.json(user)
}

const updateUser = async (
    req: Request,
    res: Response,
    data: Partial<User>,
    auditType: AUDIT_TYPE
) => {
    const adminUser = req.body as User
    const id = Number(req.params.id)

    const user: Partial<User> | null = await db.user.findUnique({
        where: { id },
    })
    if (!user) {
        res.status(500).json({ error: 'User Not Found' })
        return
    }

    const updatedUser = await db.user.update({
        where: {
            id,
        },
        data
    })



    await addAuditLog(
        adminUser,
        auditType,
        updatedUser.username
    )

    res.json({
        user: updatedUser,
    })
}

export const updateUserDisabled = async (req: Request, res: Response) => {
    const disabled = req.body.disabled;
    updateUser(req, res, { disabled }, disabled ? AUDIT_TYPE.DISABLED_ACCOUNT : AUDIT_TYPE.ENABLED_ACCOUNT)
}

export const updateUserRole = async (req: Request, res: Response) => {
    updateUser(req, res, { role: req.body.role }, AUDIT_TYPE.UPDATED_ROLE)
}
