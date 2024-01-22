import {
    Button,
    CircularProgress,
    FormControl,
    TextField,
    Typography,
} from '@mui/material'
import { FC, useEffect, useState } from 'react'
import styles from './styles'
import { AdminErrorWrapper } from '../../Global/AdminErrorWrapper'
import { COLORS } from '../../../styles/theme'
import { TLoginInfo } from '../../../types/api'
import { useUserAuthContext } from '../../../hooks/useAuth'
import { useLocation, useNavigate } from 'react-router-dom'

type TFormErrors = {
    email: string | null
    password: string | null
}

const defaultFormOptions: TLoginInfo = {
    email: '',
    password: '',
}

const defaultFormErrors: TFormErrors = {
    email: null,
    password: null,
}

const LoginForm: FC = () => {
    const [formOptions, setFormOptions] =
        useState<TLoginInfo>(defaultFormOptions)
    const [formErrors, setFormErrors] = useState<TFormErrors>(defaultFormErrors)
    const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { loginUser } = useUserAuthContext()
    const { state } = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (Object.values(formOptions).includes('')) {
            setIsSubmitDisabled(true)
            return
        }

        setIsSubmitDisabled(false)
    }, [formErrors])

    const handleChange = (e: any) => {
        const hasError = !e.target.value || e.target.value === ''
        setFormErrors({
            ...formErrors,
            [e.target.name]: hasError ? 'Field can not be empty' : null,
        })
        setFormOptions({ ...formOptions, [e.target.name]: e.target.value })
    }

    const handleSubmit = async () => {
        setIsLoading(true)
        await loginUser(formOptions)
        navigate(state?.path || '/')
        setIsLoading(false)
    }

    return (
        <FormControl sx={styles.formContainer}>
            <Typography
                padding="10px 0px 0px 0px"
                fontWeight="bold"
                fontSize="large"
                color={COLORS.TEXT_TERTIARY}
            >
                Admin Portal
            </Typography>
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
            <Button
                sx={styles.submitButton}
                variant="contained"
                onClick={handleSubmit}
                disabled={isSubmitDisabled || isLoading}
            >
                {isLoading ? <CircularProgress size="1.7em" /> : 'Login'}
            </Button>
        </FormControl>
    )
}

export default LoginForm
