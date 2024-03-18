import { User } from '@prisma/client'
import { Request } from 'express'

export enum AUDIT_TYPE {
    //should be filled with all possible tracked options
    VIEW = 'VIEW',
    CREATED_ACCOUNT = 'CREATED_ACCOUNT',
    DISABLED_ACCOUNT = 'DISABLED_ACCOUNT',
    ENABLED_ACCOUNT = 'ENABLED_ACCOUNT',
    UPDATED_ROLE = 'UPDATED_ROLE',
    CREATED_FOOTER_LIST = 'CREATED_FOOTER_LIST',
    DELETED_FOOTER_LIST = 'UPDATED_FOOTER_LIST_TITLE',
    UPDATED_FOOTER_LIST_TITLE = 'UPDATED_FOOTER_LIST_TITLE',
    CREATED_FOOTER_LIST_ITEM = 'CREATED_FOOTER_LIST_ITEM',
    UPDATED_FOOTER_LIST_ITEM = 'UPDATED_FOOTER_LIST_ITEM',
    DELETED_FOOTER_LIST_ITEM = 'DELETED_FOOTER_LIST_ITEM',
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
