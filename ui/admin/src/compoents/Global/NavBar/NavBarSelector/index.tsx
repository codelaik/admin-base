import { Box, Typography } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './styles'

type TNavbarItem = {
    title: string
    path: string
    dropdownItem?: boolean
}

export const NavbarItem: FC<TNavbarItem> = ({ title, path, dropdownItem }) => {
    const { pathname } = useLocation()
    const [isSelected, setIsSelected] = useState<boolean>(path === pathname)
    const navigate = useNavigate()

    useEffect(() => {
        if (path === pathname) {
            setIsSelected(true)
            return
        }
        if (isSelected === true) {
            setIsSelected(false)
        }
    }, [pathname, path])

    const onClick = () => navigate(path)

    return (
        <Box
            sx={styles.container(isSelected, !!dropdownItem)}
            onClick={onClick}
        >
            <Typography variant="h6" fontWeight="bold">
                {title}
            </Typography>
        </Box>
    )
}
