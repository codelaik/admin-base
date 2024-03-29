import { User } from '@prisma/client'
import { RequestType, fetcher } from './fetch'
import { Role, TAudit, TUser } from '../types/entities'

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

export const getAudits: (page?: number, limit?: number) => Promise<TAudit[]> = async (page=0, limit=10) => {
    const res = await fetcher(RequestType.GET, `http://localhost:8081/api/admin/audits?page=${page}&limit=${limit}`);
    return res.data
}
