import { User } from '@prisma/client'
import bcrypt from 'bcryptjs'

export const exclude = (user: User, keys: keyof User) => {
    return Object.fromEntries(
        Object.entries(user).filter(([key]) => !keys.includes(key))
    )
}

export const encrypt = async (unencryptedPassword: string) => {
    const salt = await bcrypt.genSalt(10)
    const encryptedPassword = await bcrypt.hash(unencryptedPassword, salt)
    return encryptedPassword
}
