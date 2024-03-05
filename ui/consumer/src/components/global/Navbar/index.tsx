import { FC, useState } from 'react'
import styles from './styles'

const Navbar: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    const changeMenuState = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>Admin-Base</div>
            <button onClick={changeMenuState} className={styles.button}>
                <span className={styles.topButtonBar(isMenuOpen)} />
                <span className={styles.middleButtonBar(isMenuOpen)} />
                <span className={styles.bottomButtonBar(isMenuOpen)} />
            </button>
            <ul className={styles.desktopList}>
                <a href="/" className={styles.menuItems}>
                    Item 1
                </a>
                <a href="/" className={styles.menuItems}>
                    Item 2
                </a>
                <a href="/" className={styles.menuItems}>
                    Item 3
                </a>
            </ul>
        </div>
    )
}

export default Navbar
