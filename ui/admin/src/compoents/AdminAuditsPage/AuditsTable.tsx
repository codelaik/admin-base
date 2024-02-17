import { FC, useEffect, useState } from 'react'
import { useAdminAuditsContext } from '../../hooks/useAdminAudits'
import {
    Button,
    Table,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material'
import { COLORS } from '../../styles/theme'

export const AdminAuditsTable: FC = () => {
    const [page, setPage] = useState<number>(0)
    const { fetchAudits, audits } = useAdminAuditsContext()
    console.log(audits)

    useEffect(() => {
        console.log(page)
        fetchAudits(page, 1)
    }, [page])

    const loadMoreAudits = () => {
        setPage(page + 1)
    }
    return (
        <TableContainer
            sx={{
                backgroundColor: COLORS.BACKGROUND_PRIMARY,
                borderRadius: '10px',
                display: 'flex',
                minWidth: '700px',
                flexDirection: 'column',
                justifyContent: 'right',
                alignItems: 'right',
            }}
        >
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="right">type</TableCell>
                        <TableCell align="right">action</TableCell>
                        <TableCell align="center">user</TableCell>
                        <TableCell align="right">createdAt</TableCell>
                    </TableRow>
                </TableHead>
                {audits.map((audit) => {
                    return (
                        <TableRow>
                            <TableCell>{audit.type}</TableCell>
                            <TableCell>{audit.action}</TableCell>
                            <TableCell>{audit.userId}</TableCell>
                            <TableCell>{audit.createdAt}</TableCell>
                        </TableRow>
                    )
                })}
            </Table>
            <Button onClick={loadMoreAudits}>Load More</Button>
        </TableContainer>
    )
}
