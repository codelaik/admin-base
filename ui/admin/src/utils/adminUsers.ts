import { User } from '@prisma/client'
import { RequestType, fetcher } from './fetch'
import { Role } from '../types/entities'

export const getAllUsers = async (showDisabled: boolean) => {
    const res = await fetcher(RequestType.POST, `http://localhost:8081/api/admin/users`, { showDisabled } )
    return res
}

export const updateUserDiabled: (id: number, disabled: boolean) => Promise<User> = async (id: number, disabled: boolean) => {
    const res = await fetcher(RequestType.POST, `http://localhost:8081/api/admin/users/${id}/disable`, { disabled })
    return res.data.user
}

export const updateUserRole: (id: number, role: Role) => Promise<User> = async (id: number, role: Role) => {
    const res = await fetcher(RequestType.POST, `http://localhost:8081/api/admin/users/${id}/role`, { role })
    return res.data.user
}
