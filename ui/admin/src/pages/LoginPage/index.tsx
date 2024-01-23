import { Box } from '@mui/material'
import { FC } from 'react'
import LoginForm from '../../compoents/LoginPage/LoginForm'
import { COLORS } from '../../styles/theme'

export const LoginPage: FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: COLORS.PRIMARY,
            }}
        >
            <LoginForm />
        </Box>
    )
}
