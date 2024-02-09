import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { FC } from 'react'
import { TUser } from '../../../types/entities'
import { Checkbox, Paper } from '@mui/material'

interface IAdminUsersTable {
    users: Record<string, TUser>
}

export const AdminUsersTable: FC<IAdminUsersTable> = ({ users }) => {
    const userList = Object.values(users)
    console.log(userList)

    return (
        <TableContainer component={Paper} sx={{ width: '70vw' }}>
            <Table sx={{ minWidth: '90%' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell align="right">Username</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Role</TableCell>
                        <TableCell align="right">Disabled</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {userList.map((row) => (
                        <TableRow
                            key={row.email}
                            sx={{
                                '&:last-child td, &:last-child th': {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell align="right">{row.username}</TableCell>
                            <TableCell align="right">{row.email}</TableCell>
                            <TableCell align="right">{row.role}</TableCell>
                            <TableCell align="right">
                                <Checkbox value={row.disabled} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
