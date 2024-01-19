import { Button, FormControl, TextField } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import styles from './styles'
import { AdminErrorWrapper } from '../../Global/AdminErrorWrapper'

type TFormOptions = {
    email: string
    password: string
}

type TFormErrors = {
    email: string | null
    password: string | null
}

const defaultFormOptions: TFormOptions = {
    email: '',
    password: '',
}

const defaultFormErrors: TFormErrors = {
    email: null,
    password: null,
}

const LoginForm: FC = () => {
    const [formOptions, setFormOptions] =
        useState<TFormOptions>(defaultFormOptions)
    const [formErrors, setFormErrors] = useState<TFormErrors>(defaultFormErrors)
    const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(false)

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

    const handleSubmit = () => {
        //submit function here
    }

    return (
        <FormControl sx={styles.formContainer}>
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
                disabled={isSubmitDisabled}
            >
                Login
            </Button>
        </FormControl>
    )
}

export default LoginForm
