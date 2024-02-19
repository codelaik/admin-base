import { FC } from 'react'
import { Box, CircularProgress } from '@mui/material'
import styles from './styles'

export const LoadingPage: FC = () => {
    return (
        <Box sx={styles.pageContainer}>
            <CircularProgress />
        </Box>
    )
}
