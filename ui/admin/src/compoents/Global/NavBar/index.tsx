import { FC } from 'react'
import { Box, Typography } from '@mui/material'
import { useUserAuthContext } from '../../../hooks/useAuth'
import styles from './styles'
import { NavbarItem } from './NavBarSelector'
import { NavbarDropdown } from './NavBarDropDown'
import { pages } from './navBarOptions'

export const Navbar: FC = () => {
    const { user } = useUserAuthContext()
    if (!user) return null
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
                    {user.username}
                </Typography>
            </Box>
            <NavbarItem path="/" title="Home" />
            <NavbarDropdown title="Pages" options={pages} />
            <NavbarItem path="/analytics" title="Analytics" />
            <NavbarItem path="/admin" title="Admin" />
        </Box>
    )
}
