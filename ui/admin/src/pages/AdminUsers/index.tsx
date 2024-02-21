import { Box } from '@mui/material'
import { FC } from 'react'
import { useAdminUsersContext } from '../../hooks/useAdminUsers'
import { AdminUsersTable } from '../../compoents/AdminUsersPage/AdminUsersTable'
import { AdminUserCreationForm } from '../../compoents/AdminUsersPage/AdminUsersCreationForm'
import styles from './styles'

export const AdminUsersPage: FC = () => {
    const { users, setShowDisabled, showDisabled, updateDisabled, updateRole } =
        useAdminUsersContext()

    return (
        <Box sx={styles.pageContainer}>
            <AdminUsersTable
                users={users}
                updateDisabled={updateDisabled}
                updateUserRole={updateRole}
                setShowDisabled={setShowDisabled}
                showDisabled={showDisabled}
            />
            <AdminUserCreationForm />
        </Box>
    )
}
