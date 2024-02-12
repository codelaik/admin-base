import { createContext, useContext, useState, FC, useEffect } from 'react'
import { TUser } from '../types/entities'
import { getAllUsers } from '../utils/adminUsers'

interface IAdminUsersContext {
    users: Record<string, TUser>
}

const useAdminUsers = () => {
    const [users, setUsers] = useState<Record<string, TUser>>({})

    useEffect(() => {
        const getAdminUsers = async () => {
            const res = await getAllUsers()
            if (res) {
                setUsers({ ...res.data })
            }
        }

        getAdminUsers()
    }, [])

    return { users }
}

const AdminUsersContext = createContext<IAdminUsersContext>({
    users: {},
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
