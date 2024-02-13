import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { FC } from 'react'
import { TUser } from '../../../types/entities'
import {
    Checkbox,
    MenuItem,
    Paper,
    Select,
    SelectChangeEvent,
} from '@mui/material'
import { Role } from '../../../types/entities'

interface IAdminUsersTable {
    users: Record<string, TUser>
    updateDisabled: (id: number, disabled: boolean) => void
    updateUserRole: (id: number, role: Role) => void
}

export const AdminUsersTable: FC<IAdminUsersTable> = ({
    users,
    updateDisabled,
    updateUserRole,
}) => {
    const userList = Object.values(users)
    console.log(userList)

    const handleRoleChange = (id: number) => (event: SelectChangeEvent) => {
        updateUserRole(id, event.target.value as Role)
    }

    return (
        <TableContainer
            component={Paper}
            sx={{ width: '70vw', maxHeight: '300px' }}
        >
            <Table sx={{ minWidth: '90%' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell align="right">Username</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="center">Role</TableCell>
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
                            <TableCell align="center">
                                <Select
                                    value={row.role}
                                    onChange={handleRoleChange(row.id)}
                                >
                                    <MenuItem value={Role.SUPER_ADMIN}>
                                        Super Admin
                                    </MenuItem>
                                    <MenuItem value={Role.ADMIN}>
                                        Admin
                                    </MenuItem>
                                    <MenuItem value={Role.MODERATOR}>
                                        Moderator
                                    </MenuItem>
                                </Select>
                            </TableCell>
                            <TableCell align="right">
                                <Checkbox
                                    checked={row.disabled}
                                    onClick={() =>
                                        updateDisabled(row.id, !row.disabled)
                                    }
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
