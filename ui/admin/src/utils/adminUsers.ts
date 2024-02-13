import { User } from '@prisma/client'
import { RequestType, fetcher } from './fetch'
import { Role, TUser } from '../types/entities'

export const getAllUsers: (showDisabled: boolean) => Promise<any> = async (showDisabled) => {
    const res = await fetcher(RequestType.POST, `http://localhost:8081/api/admin/users`, { showDisabled } )
    return res
}

export const updateUserDiabled: (id: number, disabled: boolean) => Promise<User> = async (id, disabled) => {
    const res = await fetcher(RequestType.POST, `http://localhost:8081/api/admin/users/${id}/disable`, { disabled })
    return res.data.user
}

export const updateUserRole: (id: number, role: Role) => Promise<User> = async (id, role) => {
    const res = await fetcher(RequestType.POST, `http://localhost:8081/api/admin/users/${id}/role`, { role })
    return res.data.user
}

export const createUser: (user: Partial<TUser>) => Promise<User> = async (user) => {
    const res = await fetcher(RequestType.POST, `http://localhost:8081/api/admin/users/create`, { ...user })
    return res.data.user
}
