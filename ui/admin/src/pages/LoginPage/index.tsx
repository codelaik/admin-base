import { Box } from '@mui/material'
import { FC } from 'react'
import LoginForm from '../../compoents/LoginPage/LoginForm'

export const LoginPage: FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <LoginForm />
        </Box>
    )
}
