import { Box, Typography } from '@mui/material'
import { FC, useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { NavbarItem } from '../NavBarSelector'
import styles from './styles'
import autoAnimate from '@formkit/auto-animate'
//TODO: animate opening dropdown for a smoother transition

type TNavbarDropdown = {
    title: string
    options: {
        title: string
        path: string
    }[]
}

export const NavbarDropdown: FC<TNavbarDropdown> = ({ options, title }) => {
    const [isSelected, setIsSelected] = useState<boolean>(false)
    const [openOptions, setOpenOptions] = useState<any[]>([])
    const { pathname } = useLocation()
    const parentRef = useRef()

    useEffect(() => {
        if (parentRef.current) {
            autoAnimate(parentRef.current)
        }
    }, [parentRef])

    useEffect(() => {
        if (isSelected) {
            setOpenOptions(options)
            return
        }
        setOpenOptions([])
    }, [isSelected])

    useEffect(() => {
        if (options.some((option) => option.path === pathname)) {
            setIsSelected(true)
        }
    }, [pathname, options])

    return (
        <Box
            sx={styles.drowdownContainer(isSelected)}
            onClick={() => setIsSelected(!isSelected)}
        >
            <Box sx={styles.selectorContainer(isSelected)}>
                <Typography variant="h6" fontWeight="bold">
                    {title}
                </Typography>
                <Typography
                    sx={styles.carrotAnimation(isSelected)}
                    variant="h6"
                >
                    &#9650;
                </Typography>
            </Box>
            {openOptions.map((option) => {
                return (
                    <NavbarItem
                        path={option.path}
                        title={option.title}
                        key={option.path}
                        dropdownItem
                    />
                )
            })}
        </Box>
    )
}
