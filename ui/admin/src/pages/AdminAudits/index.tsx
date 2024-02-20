import { Box } from '@mui/material'
import { FC } from 'react'
import { AdminAuditsTable } from '../../compoents/AdminAuditsPage/AuditsTable'
import styles from './styles'

export const AdminAuditsPage: FC = () => {
    return (
        <Box sx={styles.container}>
            <AdminAuditsTable />
        </Box>
    )
}
