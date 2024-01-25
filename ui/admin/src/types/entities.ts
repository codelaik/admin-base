export enum Role {
    SUPER_ADMIN = 'SUPER_ADMIN',
    ADMIN = 'ADMIN',
    MODERATOR = 'MODERATOR',
}

export type TUser = {
    id: number
    email: string
    username: string
    role: Role
    disabled: boolean
}
