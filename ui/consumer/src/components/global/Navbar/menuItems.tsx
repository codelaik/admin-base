import { FC } from 'react'
import styles from './styles'

interface IMenuItems {
    desktop?: boolean
}

export const MenuItems: FC<IMenuItems> = ({ desktop = false }) => {
    return (
        <>
            <a href="/" className={styles.menuItems(desktop)}>
                About Us
            </a>
            <a href="/" className={styles.menuItems(desktop)}>
                Pictures
            </a>
            <a href="/" className={styles.menuItems(desktop)}>
                Calendar
            </a>
            <a href="/" className={styles.menuItems(desktop)}>
                Contact Us
            </a>
        </>
    )
}
