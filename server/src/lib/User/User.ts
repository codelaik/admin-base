import { Request, Response } from 'express'
import Logger from '../logger'
import bcrypt from 'bcryptjs'
import db from '../prisma'
import { AUDIT_TYPE, ReqWithUser, ResponseStatus } from '../../types'
import jwt from 'jsonwebtoken'
import { User } from '@prisma/client'
import { addAuditLog } from '../audit'

const secretOrKey = process.env.SECRET_OR_KEY

export const usernameAvailability = async (req: Request, res: Response) => {
    const usernameExists: Partial<User> | null = await db.user.findUnique({
        where: { username: req.body.username },
    })

    if (!!usernameExists) {
        res.json({
            available: false,
        })
        return
    }
    res.json({ available: true })
}

export const createUser = async (req: Request, res: Response) => {
    Logger.info('/api/admin/user - post request')
    const initilizingUser = req.user || ({ username: 'Undefined' } as User)
    const userExists: Partial<User> | null = await db.user.findUnique({
        where: { email: req.body.email },
    })
    if (!!userExists)
        res.status(500).json({
            status: ResponseStatus.FAILED,
            errorMessage: 'Email Already Taken',
        })

    const unencryptedPassword = req.body.password
    // TODO: remove call backs and use await instead
    const salt = await bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            res.status(500).json({
                status: ResponseStatus.FAILED,
                errorMessage: err.message,
            })
        }
        bcrypt.hash(unencryptedPassword, salt, async (err, hash) => {
            if (err) {
                res.status(500).json({
                    status: ResponseStatus.FAILED,
                    errorMessage: err.message,
                })
            }
            const encryptedPassword = hash
            const savedUser = await db.user.create({
                data: {
                    username: req.body.username,
                    email: req.body.email,
                    password: encryptedPassword,
                    disabled: false,
                },
            })
            const payload = { id: savedUser.id, email: savedUser.email }
            jwt.sign(
                payload,
                secretOrKey as string,
                {},
                (err: Error | null, token?: string) => {
                    addAuditLog(
                        initilizingUser as User,
                        AUDIT_TYPE.CREATED_ACCOUNT,
                        savedUser.username
                    )
                    res.json({
                        status: ResponseStatus.SUCCESS,
                        token: 'Bearer ' + token,
                        user: savedUser,
                    })
                }
            )
        })
    })
}

export const loginUser = async (req: Request, res: Response) => {
    const loginInfo: { email: string; password: string } = req.body
    const user: Partial<User> | null = await db.user.findUnique({
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
    const payload = { id: user.id, username: user.email }

    jwt.sign(
        payload,
        secretOrKey as string,
        {},
        (err: Error | null, token?: string) => {
            res.json({
                status: ResponseStatus.SUCCESS,
                token: 'Bearer ' + token,
                user: user,
            })
        }
    )
}

export const getUser = (req: Request, res: Response) => {
    const user = req.user
    if (!user) {
        Logger.warn('No current User found')
        res.status(500).json({
            errorMessage: 'No Current User Found',
        })
        return
    }
    res.json({ user })
}

const changeUserState = async (
    req: Request,
    res: Response,
    status: boolean
) => {
    const adminUser = req.body as User
    const id = Number(req.params.id)

    const user: Partial<User> | null = await db.user.findUnique({
        where: { id },
    })
    if (!user) {
        res.status(500).json({ error: 'User Found' })
        return
    }

    const updatedUser = await db.user.update({
        where: {
            id,
        },
        data: {
            disabled: status,
        },
    })

    await addAuditLog(
        adminUser,
        AUDIT_TYPE.DISABLED_ACCOUNT,
        updatedUser.username
    )

    res.json({
        user: updatedUser,
    })
}

export const disableUser = async (req: Request, res: Response) => {
    changeUserState(req, res, false)
}

export const enalbeUser = async (req: Request, res: Response) => {
    changeUserState(req, res, true)
}
