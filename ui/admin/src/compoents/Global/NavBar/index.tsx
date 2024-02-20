import { FC, useMemo } from 'react'
import { Box, Typography } from '@mui/material'
import { useUserAuthContext } from '../../../hooks/useAuth'
import styles from './styles'
import { NavbarItem } from './NavBarSelector'
import { NavbarDropdown } from './NavBarDropDown'
import { navbarOptions } from './navBarOptions'
import { TUser } from '../../../types/entities'

export const Navbar: FC = () => {
    //TODO: should be typed properly, added in interest of time
    const { user } = useUserAuthContext() as { user: TUser }

    const options = useMemo(() => navbarOptions[user?.role], [])

    if (!user) return null

    return (
        <Box sx={styles.navBarContainer}>
            <Box sx={styles.titleContainer}>
                <Typography variant="h4" color="white">
                    Admin-Base
                </Typography>
                <Typography
                    sx={{ textAlign: 'left' }}
                    textAlign="left"
                    fontSize="15px"
                    color="white"
                >
                    {user.username}
                </Typography>
            </Box>
            {options.map((option: any) => {
                if (!!option.dropdown) {
                    return (
                        <NavbarDropdown
                            title={option.title}
                            options={option.dropdown}
                        />
                    )
                }
                return <NavbarItem path={option.path} title={option.title} />
            })}
            <Box sx={styles.waterMark}>
                <Typography variant="caption">Powered by CodeLaik</Typography>
            </Box>
        </Box>
    )
}
