import { createContext, useContext, useState, FC, useEffect } from 'react'
import { Role, TUser } from '../types/entities'
import {
    createUser,
    getAllUsers,
    updateUserDiabled,
    updateUserRole,
} from '../utils/admin'
import toast from 'react-hot-toast'

interface IAdminUsersContext {
    users: Record<string, TUser>
    setShowDisabled: ((_: boolean) => void) | null
    showDisabled: boolean
    updateDisabled: (id: number, role: boolean) => void
    updateRole: (id: number, role: Role) => void
    createNewUser: (user: Partial<TUser>) => void
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
        if (newUser) {
            toast.success(
                `User Successfully ${disabled ? 'Disabled' : 'Enabled'}`
            )
            setUsers({ ...users, [newUser.id]: newUser })
        }
    }

    const updateRole = async (id: number, role: Role) => {
        const newUser = await updateUserRole(id, role)
        if (newUser) {
            toast.success(`User Role Successfully Updated`)
            setUsers({ ...users, [newUser.id]: newUser })
        }
    }

    const createNewUser = async (user: Partial<TUser>) => {
        const newUser = await createUser(user)
        if (newUser) {
            toast.success(`New User Successfully Created`)
            setUsers({ ...users, [newUser.id]: newUser })
        }
    }

    return {
        users,
        showDisabled,
        setShowDisabled,
        updateDisabled,
        updateRole,
        createNewUser,
    }
}

const AdminUsersContext = createContext<IAdminUsersContext>({
    users: {},
    showDisabled: false,
    setShowDisabled(_) {},
    updateDisabled(_, __) {},
    updateRole(_, __) {},
    createNewUser(_) {},
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
