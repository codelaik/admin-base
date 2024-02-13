import {
    Button,
    CircularProgress,
    FormControl,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
} from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { AdminErrorWrapper } from '../../Global/AdminErrorWrapper'
import { useAdminUsersContext } from '../../../hooks/useAdminUsers'
import { Role, TUser } from '../../../types/entities'
import { COLORS } from '../../../styles/theme'
const defaultUserCreation = {
    username: '',
    email: '',
    password: '',
    role: Role.MODERATOR,
}
const defaultUserCreationErrors = {
    username: '',
    email: '',
    password: '',
    role: '',
}

type TFormErrors = {
    username: string
    email: string
    password: string
    role: string
}

export const AdminUserCreationForm: FC = () => {
    const [formOptions, setFormOptions] =
        useState<Partial<TUser>>(defaultUserCreation)
    const [formErrors, setFormErrors] = useState<TFormErrors>(
        defaultUserCreationErrors
    )
    const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { createNewUser } = useAdminUsersContext()

    useEffect(() => {
        if (Object.values(formOptions).includes('')) {
            setIsSubmitDisabled(true)
            return
        }

        setIsSubmitDisabled(false)
    }, [formErrors, formOptions])

    const handleChange = (e: any) => {
        const hasError = !e.target.value || e.target.value === ''
        setFormErrors({
            ...formErrors,
            [e.target.name]: hasError ? 'Field can not be empty' : null,
        })
        setFormOptions({ ...formOptions, [e.target.name]: e.target.value })
    }

    const handleSelectorChange = (e: SelectChangeEvent) => {
        setFormOptions({ ...formOptions, role: e.target.value as Role })
    }

    const handleSubmit = async () => {
        setIsLoading(true)
        await createNewUser(formOptions)
        setIsLoading(false)
    }

    return (
        <FormControl
            sx={{
                width: '600px',
                backgroundColor: COLORS.BACKGROUND_PRIMARY,
                padding: '10px',
                '& div': {
                    padding: '2px',
                },
                '& select': {
                    padding: '5px',
                },
            }}
        >
            <AdminErrorWrapper error={formErrors.username}>
                <TextField
                    onChange={handleChange}
                    name="username"
                    placeholder="Username"
                    error={!!formErrors.username}
                />
            </AdminErrorWrapper>
            <AdminErrorWrapper error={formErrors.email}>
                <TextField
                    onChange={handleChange}
                    name="email"
                    placeholder="Email"
                    error={!!formErrors.email}
                />
            </AdminErrorWrapper>
            <AdminErrorWrapper error={formErrors.password}>
                <TextField
                    onChange={handleChange}
                    name="password"
                    placeholder="Password"
                    type="password"
                    error={!!formErrors.password}
                />
            </AdminErrorWrapper>
            <Select value={formOptions.role} onChange={handleSelectorChange}>
                <MenuItem value={Role.SUPER_ADMIN}>Super Admin</MenuItem>
                <MenuItem value={Role.ADMIN}>Admin</MenuItem>
                <MenuItem value={Role.MODERATOR}>Moderator</MenuItem>
            </Select>
            <Button
                variant="contained"
                onClick={handleSubmit}
                disabled={isSubmitDisabled || isLoading}
            >
                {isLoading ? <CircularProgress size="1.7em" /> : 'Login'}
            </Button>
        </FormControl>
    )
}
