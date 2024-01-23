import { Box, Typography } from '@mui/material'
import { FC, useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { COLORS } from '../../../../styles/theme'
import { NavbarItem } from '../NavBarSelector'
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
            sx={{
                width: '100%',
                margin: '0px',
                color: COLORS.TEXT_TERTIARY,
                display: 'flex',
                flexDirection: 'column',
                borderLeft: isSelected
                    ? `5px solid ${COLORS.TEXT_TERTIARY}`
                    : null,
            }}
            onClick={() => setIsSelected(!isSelected)}
        >
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    margin: '0px',
                    padding: '20px',
                    justifyContent: 'space-between',
                    color: 'white',
                    '&:hover': {
                        cursor: 'pointer',
                        backgroundColor: isSelected
                            ? null
                            : COLORS.TEXT_TERTIARY,
                    },
                }}
            >
                <Typography variant="h6" fontWeight="bold">
                    {title}
                </Typography>
                <Typography variant="h6" fontWeight="bold">
                    {isSelected ? 'V' : '>'}
                </Typography>
            </Box>
            <Box sx={{ padding: '0px', paddingLeft: '20px' }}>
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
