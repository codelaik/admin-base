import { createContext, useContext, useState, FC, useEffect } from 'react'
import { TLoginInfo } from '../types/api'
import { TUser } from '../types/entities'
import { checkLogin, login, logout } from '../utils/login'

interface IUserAuthContext {
    loginUser: (data: TLoginInfo) => void
    logoutUser: () => void
    authed: boolean
    user: TUser | null
    isLoading: boolean
    setIsLoading: (_: boolean) => void
}

const useUserAuth = () => {
    const [user, setUser] = useState<TUser | null>(null)
    const [authed, setAuthed] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState(true)

    const loginUser = async (data: TLoginInfo) => {
        const user = await login(data)
        setAuthed(true)
        setUser(user)
    }

    const logoutUser = () => {
        logout()
        setAuthed(false)
        setUser(null)
    }

    useEffect(() => {
        setIsLoading(true)
        const checkUser = async () => {
            const user = await checkLogin()
            if (user) {
                setAuthed(true)
                setUser(user)
            }
            setIsLoading(false)
        }

        checkUser()
    }, [])

    return { user, authed, logoutUser, loginUser, isLoading, setIsLoading }
}

const UserAuthContext = createContext<IUserAuthContext>({
    loginUser: (_) => undefined,
    logoutUser: () => undefined,
    user: null,
    authed: false,
    isLoading: true,
    setIsLoading: (_) => undefined,
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
