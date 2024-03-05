import { FC, useState } from 'react'
import styles from './styles'
import { MenuItems } from './menuItems'

const Navbar: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    const changeMenuState = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>Admin-Base</div>
                <button onClick={changeMenuState} className={styles.button}>
                    <span className={styles.topButtonBar(isMenuOpen)} />
                    <span className={styles.middleButtonBar(isMenuOpen)} />
                    <span className={styles.bottomButtonBar(isMenuOpen)} />
                </button>
                <ul className={styles.desktopList}>
                    <MenuItems desktop />
                </ul>
            </div>
            <div
                className={styles.mobileMenuContainer(isMenuOpen)}
                onClick={changeMenuState}
            >
                <ul className={styles.mobileMenuList}>
                    <MenuItems />
                </ul>
            </div>
        </>
    )
}

export default Navbar
