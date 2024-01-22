import { createContext, useContext, useState } from 'react'
import { TLoginInfo } from '../types/api'
import { TUser } from '../types/entities'
import { login, logout } from '../utils/login'

interface IUserAuthContext {
    loginUser: (data: TLoginInfo) => void
    logoutUser: () => void
    user: TUser | null
}
export const useUserAuth = () => {
    const [user, setUser] = useState<TUser | null>(null)
    const loginUser = async (data: TLoginInfo) => {
        const user = await login(data)
        setUser(user)
    }

    const logoutUser = () => {
        logout()
        setUser(null)
    }

    return { user, logoutUser, loginUser }
}

const UserAuthContext = createContext<IUserAuthContext>({
    loginUser: (_) => undefined,
    logoutUser: () => undefined,
    user: null,
})

export const UserAuthProvider: React.FC<{ children: any }> = ({ children }) => {
    const value = useUserAuth()
    return (
        <UserAuthContext.Provider value={value}>
            {children}
        </UserAuthContext.Provider>
    )
}

export const useUserAuthContext = () => useContext(UserAuthContext)
