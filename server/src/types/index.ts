import { Request } from 'express'

export enum AUDIT_TYPE {
    //should be filled with all possible tracked options
    VIEW = 'VIEW',
    CREATED_ACCOUNT = 'CREATED_ACCOUNT',
    DISABLED_ACCOUNT = 'DISABLED_ACCOUNT',
}

export type TAuditLog = {
    id: number
    type: string
    action: string
    user: TUser
    userId: number
    createdAt: string
}

export type TUser = {
    id: number
    username: string
    password: string
    disabled: boolean
    auditLogs: TAuditLog[]
}

export type ReqWithUser = Request & {
    user: TUser
}
