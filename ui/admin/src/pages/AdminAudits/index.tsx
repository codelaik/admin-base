import { Box, CircularProgress } from '@mui/material'
import { FC } from 'react'
import { AdminAuditsTable } from '../../compoents/AdminAuditsPage/AuditsTable'

export const AdminAuditsPage: FC = () => {
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
            <AdminAuditsTable />
            <CircularProgress />
        </Box>
    )
}
