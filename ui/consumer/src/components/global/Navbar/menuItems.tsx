import { FC } from 'react'
import styles from './styles'
import { useLocation } from 'react-router-dom'

interface IMenuItems {
    desktop?: boolean
}

export const MenuItems: FC<IMenuItems> = ({ desktop = false }) => {
    const { pathname } = useLocation()
    return (
        <>
            <a
                href="/about"
                className={styles.menuItems(pathname === '/about')}
            >
                About Us
            </a>
            <a
                href="/pictures"
                className={styles.menuItems(pathname === '/pictures')}
            >
                Pictures
            </a>
            <a
                href="/calendar"
                className={styles.menuItems(pathname === '/calendar')}
            >
                Calendar
            </a>
            <a
                href="/contact"
                className={styles.menuItems(pathname === '/contact')}
            >
                Contact Us
            </a>
        </>
    )
}
