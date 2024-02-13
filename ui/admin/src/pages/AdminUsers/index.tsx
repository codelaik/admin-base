import { Box, Checkbox, Typography } from '@mui/material'
import { FC } from 'react'
import { useAdminUsersContext } from '../../hooks/useAdminUsers'
import { AdminUsersTable } from '../../compoents/AdminUsersPage/AdminUsersTable'
import { AdminUserCreationForm } from '../../compoents/AdminUsersPage/AdminUsersCreationForm'

export const AdminUsersPage: FC = () => {
    const { users, setShowDisabled, showDisabled, updateDisabled, updateRole } =
        useAdminUsersContext()
    console.log(showDisabled)

    const onClick = () => {
        setShowDisabled && setShowDisabled(!showDisabled)
    }

    return (
        <Box
            sx={{
                // display: 'flex',
                // justifyContent: 'center',
                // alignItems: 'center',
                height: '100vh',
                padding: '20px',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'left',
                    alignItems: 'left',
                }}
            >
                <AdminUsersTable
                    users={users}
                    updateDisabled={updateDisabled}
                    updateUserRole={updateRole}
                />
                <Typography>
                    <Checkbox value={showDisabled} onClick={onClick} />
                    Show Disabled
                </Typography>
                <AdminUserCreationForm />
            </Box>
        </Box>
    )
}
