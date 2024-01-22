import { createContext, useContext, useState, FC, useEffect } from 'react'
import { TLoginInfo } from '../types/api'
import { TUser } from '../types/entities'
import { login, logout } from '../utils/login'

interface IUserAuthContext {
    loginUser: (data: TLoginInfo) => void
    logoutUser: () => void
    authed: boolean
    user: TUser | null
}

const useUserAuth = () => {
    const [user, setUser] = useState<TUser | null>(null)
    const [authed, setAuthed] = useState<boolean>(false)

    const loginUser = async (data: TLoginInfo) => {
        const user = await login(data)
        console.log(user)
        setAuthed(true)
        setUser(user)
    }

    useEffect(() => console.log(user), [user])

    const logoutUser = () => {
        logout()
        setAuthed(false)
        setUser(null)
    }

    return { user, authed, logoutUser, loginUser }
}

const UserAuthContext = createContext<IUserAuthContext>({
    loginUser: (_) => undefined,
    logoutUser: () => undefined,
    user: null,
    authed: false,
})

export const UserAuthProvider: FC<{ children: any }> = ({ children }) => {
    const value = useUserAuth()
    return (
        <UserAuthContext.Provider value={value}>
            {children}
        </UserAuthContext.Provider>
    )
}

export const useUserAuthContext = () => useContext(UserAuthContext)
