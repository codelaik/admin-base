import { Box, Typography } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { COLORS } from '../../../../styles/theme'

type TNavbarItem = {
    title: string
    path?: string
}

export const NavbarItem: FC<TNavbarItem> = ({ title, path }) => {
    const { pathname } = useLocation()
    const [isSelected, setIsSelected] = useState<boolean>(path === pathname)

    useEffect(() => {
        if (path === pathname) {
            setIsSelected(true)
            return
        }
        if (isSelected === true) {
            setIsSelected(false)
        }
    }, [pathname])

    return (
        <Box
            sx={{
                width: '100%',
                margin: '0px',
                padding: '20px',
                backgroundColor: isSelected ? 'white' : null,
                color: isSelected ? COLORS.TEXT_TERTIARY : 'white',
                display: 'flex',
                justifyContent: 'space-between',
                '&:hover': {
                    cursor: isSelected ? null : 'pointer',
                    backgroundColor: isSelected ? null : COLORS.TEXT_TERTIARY,
                },
            }}
        >
            <Typography variant="h6" fontWeight="bold">
                {title}
            </Typography>
            <Typography variant="h6" fontWeight="bold">
                {'>'}
            </Typography>
        </Box>
    )
}
