import { User } from '@prisma/client'

export const exclude = (user: User, keys: keyof User) => {
    return Object.fromEntries(
        Object.entries(user).filter(([key]) => !keys.includes(key))
    )
}
