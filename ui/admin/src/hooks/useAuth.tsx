import { createContext, useContext, useState, FC, useEffect } from 'react'
import { TLoginInfo } from '../types/api'
import { TUser } from '../types/entities'
import { checkLogin, login, logout } from '../utils/login'

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
        setAuthed(true)
        setUser(user)
    }

    const logoutUser = () => {
        logout()
        setAuthed(false)
        setUser(null)
    }

    useEffect(() => {
        const checkUser = async () => {
            console.log('hit')
            const user = await checkLogin()
            if (user) {
                setAuthed(true)
                setUser(user)
            }
        }

        checkUser()
    }, [])

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
