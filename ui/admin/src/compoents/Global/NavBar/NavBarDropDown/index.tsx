import { Box, Typography } from '@mui/material'
import { FC, useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { NavbarItem } from '../NavBarSelector'
import styles from './styles'
import autoAnimate from '@formkit/auto-animate'

type TNavbarDropdown = {
    title: string
    options: {
        title: string
        path: string
    }[]
}

export const NavbarDropdown: FC<TNavbarDropdown> = ({ options, title }) => {
    const [isSelected, setIsSelected] = useState<boolean>(false)
    const { pathname } = useLocation()
    console.log(localStorage.jwtToken)
    const parentRef = useRef()

    useEffect(() => {
        if (parentRef.current) {
            autoAnimate(parentRef.current)
        }
    }, [parentRef])

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
                <Typography variant="h6" fontWeight="bold">
                    {isSelected ? 'V' : '>'}
                </Typography>
            </Box>
            <Box sx={styles.itemsMenu}>
                {isSelected
                    ? options.map((option) => {
                          return (
                              <NavbarItem
                                  path={option.path}
                                  title={option.title}
                                  key={option.path}
                              />
                          )
                      })
                    : null}
            </Box>
        </Box>
    )
}
