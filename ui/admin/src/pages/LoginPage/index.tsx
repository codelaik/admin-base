import { Box } from '@mui/material'
import { FC } from 'react'
import LoginForm from '../../compoents/LoginPage/LoginForm'
import styles from './styles'

export const LoginPage: FC = () => {
    return (
        <Box sx={styles.pageContainer}>
            <LoginForm />
        </Box>
    )
}
