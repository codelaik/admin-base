import { Box, Typography } from '@mui/material'
import { COLORS } from '../../../styles/theme'
import { FC } from 'react'
import styles from './styles'

type TAdminLoginWrapper = {
    children: any
    error: string | null
}

export const AdminErrorWrapper: FC<TAdminLoginWrapper> = ({
    children,
    error,
}) => {
    return (
        <Box sx={styles.container}>
            {children}
            {!!error && (
                <Typography
                    variant="caption"
                    color={COLORS.ERROR}
                    sx={{ paddingLeft: '5px' }}
                >
                    *{error}
                </Typography>
            )}
        </Box>
    )
}
