import { createContext, useContext, useState, FC, useEffect } from 'react'
import { TUser } from '../types/entities'
import { getAllUsers } from '../utils/adminUsers'

interface IAdminUsersContext {
    users: Record<string, TUser>
    setShowDisabled: ((_: boolean) => void) | null
    showDisabled: boolean
}

const useAdminUsers = () => {
    const [users, setUsers] = useState<Record<string, TUser>>({})
    const [showDisabled, setShowDisabled] = useState<boolean>(false)

    useEffect(() => {
        const getAdminUsers = async () => {
            const res = await getAllUsers(showDisabled)
            if (res) {
                setUsers({ ...res.data })
            }
        }

        getAdminUsers()
    }, [showDisabled])

    return { users, showDisabled, setShowDisabled }
}

const AdminUsersContext = createContext<IAdminUsersContext>({
    users: {},
    showDisabled: false,
    setShowDisabled: null,
})

export const AdminUsersProvider: FC<{ children: any }> = ({ children }) => {
    const value = useAdminUsers()
    return (
        <AdminUsersContext.Provider value={value}>
            {children}
        </AdminUsersContext.Provider>
    )
}

export const useAdminUsersContext = () => useContext(AdminUsersContext)
