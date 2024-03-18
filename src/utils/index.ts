import { Role, User } from '@prisma/client'
import bcrypt from 'bcryptjs'
import { Request, Response } from 'express'
import passport from 'passport'

export const exclude = (user: User, keys: keyof User) => {
    return Object.fromEntries(
        Object.entries(user).filter(([key]) => !keys.includes(key))
    )
}

/**
 * Encrypt a string for sensitive data (such as passwords). Be sure to await as the bycrypt function is asyncronous
 * @async
 * @param unencryptedPassword String
 * @returns encryptedPassword as a string
 */
export const encrypt = async (unencryptedPassword: string) => {
    const salt = await bcrypt.genSalt(10)
    const encryptedPassword = await bcrypt.hash(unencryptedPassword, salt)
    return encryptedPassword
}

/**
 * Checks if the user has correct permissions then returns a boolean
 * @async
 * @param user
 * @param allowedPermissions
 * @returns boolean
 */
export const hasPermissions = (user: User, allowedPermissions: Role[]) => {
    const userRole = user.role
    return !userRole || !allowedPermissions.some((role) => role === userRole)
}

/**
 *
 * @param url url for the route
 * @param func action taken when the route is hit
 * @returns
 */
export const authenticatedRoute = (
    url: string,
    func: (req: Request, res: Response) => any
) => [url, passport.authenticate('jwt', { session: false }), func]
