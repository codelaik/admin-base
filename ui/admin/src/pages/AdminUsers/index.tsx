import { Box } from '@mui/material'
import { FC } from 'react'
import { useAdminUsersContext } from '../../hooks/useAdminUsers'
import { AdminUsersTable } from '../../compoents/AdminUsersPage/AdminUsersTable'

export const AdminUsersPage: FC = () => {
    const { users } = useAdminUsersContext()
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <AdminUsersTable users={users} />
        </Box>
    )
}
