import { FC } from 'react'
import { Box, Typography } from '@mui/material'
import { useUserAuthContext } from '../../../hooks/useAuth'
import styles from './styles'
import { NavbarItem } from './NavBarSelector'
import { NavbarDropdown } from './NavBarDropDown'
import { navbarOptions } from './navBarOptions'

export const Navbar: FC = () => {
    const { user } = useUserAuthContext()
    if (!user) return null

    let options = navbarOptions[user.role]

    return (
        <Box sx={styles.navBarContainer}>
            <Box sx={styles.titleContainer}>
                <Typography variant="h4" color="white">
                    Admin-Base
                </Typography>
                <img
                    style={styles.profilePhoto}
                    src="https://www.pphfoundation.ca/wp-content/uploads/2018/05/default-avatar.png"
                    alt="profile"
                />
                <Typography
                    sx={{ textAlign: 'left' }}
                    textAlign="left"
                    variant="h6"
                    color="white"
                >
                    {user?.username}
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
        </Box>
    )
}
