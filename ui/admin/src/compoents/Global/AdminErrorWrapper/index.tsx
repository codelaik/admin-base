import { Box, Typography } from '@mui/material'
import { COLORS } from '../../../styles/theme'
import { FC } from 'react'

type TAdminLoginWrapper = {
    children: any
    error: string | null
}

export const AdminErrorWrapper: FC<TAdminLoginWrapper> = ({
    children,
    error,
}) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
