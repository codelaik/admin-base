import { createContext, useContext, useState, FC, useEffect } from 'react'
import { TUser } from '../types/entities'
import { getAllUsers, updateUserDiabled } from '../utils/adminUsers'

interface IAdminUsersContext {
    users: Record<string, TUser>
    setShowDisabled: ((_: boolean) => void) | null
    showDisabled: boolean
    updateDisabled: (_: number, __: boolean) => void
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

    const updateDisabled = async (id: number, disabled: boolean) => {
        const newUser = await updateUserDiabled(id, disabled)
        setUsers({ ...users, [newUser.id]: newUser })
    }

    return { users, showDisabled, setShowDisabled, updateDisabled }
}

const AdminUsersContext = createContext<IAdminUsersContext>({
    users: {},
    showDisabled: false,
    setShowDisabled(_) {},
    updateDisabled(_, __) {},
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
