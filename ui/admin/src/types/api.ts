import { TUser } from './entities'

export type TLoginInfo = {
    email: string
    password: string
}

export type TLoginResult = {
    status: string
    token: string
    user: TUser
}
