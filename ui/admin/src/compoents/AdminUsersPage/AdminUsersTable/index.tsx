import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { FC } from 'react'
import { TUser } from '../../../types/entities'
import {
    Box,
    Checkbox,
    MenuItem,
    Paper,
    Select,
    SelectChangeEvent,
    Typography,
} from '@mui/material'
import { Role } from '../../../types/entities'
import styles from './styles'

interface IAdminUsersTable {
    users: Record<string, TUser>
    updateDisabled: (id: number, disabled: boolean) => void
    updateUserRole: (id: number, role: Role) => void
    setShowDisabled?: ((disabled: boolean) => void) | null
    showDisabled: boolean
}

export const AdminUsersTable: FC<IAdminUsersTable> = ({
    users,
    updateDisabled,
    updateUserRole,
    setShowDisabled,
    showDisabled,
}) => {
    const userList = Object.values(users)

    const update = (id: number, setDisabled: boolean) => () => {
        updateDisabled(id, setDisabled)
    }

    const handleRoleChange = (id: number) => (event: SelectChangeEvent) => {
        updateUserRole(id, event.target.value as Role)
    }

    const onClick = () => {
        setShowDisabled && setShowDisabled(!showDisabled)
    }

    return (
        <Box sx={styles.container}>
            <TableContainer component={Paper} sx={styles.tableContainer}>
                <Table sx={styles.table} aria-label="simple table">
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
                            <TableRow key={row.email} sx={styles.row}>
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">
                                    {row.username}
                                </TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="center">
                                    <Select
                                        value={row.role}
                                        sx={{ width: '150px' }}
                                        onChange={handleRoleChange(row.id)}
                                        size="small"
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
                                        onClick={update(row.id, !row.disabled)}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Typography>
                <Checkbox value={showDisabled} onClick={onClick} />
                Show Disabled
            </Typography>
        </Box>
    )
}
