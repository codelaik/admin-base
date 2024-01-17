import { Request, Response } from 'express'
import Logger from '../logger'
import bcrypt from 'bcryptjs'
import db from '../prisma'
import { ResponseStatus } from '../../types'
import jwt from 'jsonwebtoken'
import { User } from '@prisma/client'

const secretOrKey = process.env.SECRET_OR_KEY

export const createUser = async (req: Request, res: Response) => {
    Logger.info('/api/admin/user - post request')
    const userExists: Partial<User> | null = await db.user.findUnique({
        where: { email: req.body.email },
    })
    if (userExists)
        res.status(500).json({
            status: ResponseStatus.FAILED,
            errorMessage: 'Email Already Taken',
        })

    const unencryptedPassword = req.body.password
    bcrypt.genSalt(10, (err, salt) => {
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
