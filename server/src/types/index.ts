import { User } from '@prisma/client'
import { Request } from 'express'

export enum AUDIT_TYPE {
    //should be filled with all possible tracked options
    VIEW = 'VIEW',
    CREATED_ACCOUNT = 'CREATED_ACCOUNT',
    DISABLED_ACCOUNT = 'DISABLED_ACCOUNT',
}

export type ReqWithUser = Request & {
    user: User
}

export enum Environment {
    DEVELOPMENT = 'development',
    PRODUCTION = 'production',
}

export enum ResponseStatus {
    FAILED = 'FAILED',
    SUCCESS = 'SUCCESS',
}
