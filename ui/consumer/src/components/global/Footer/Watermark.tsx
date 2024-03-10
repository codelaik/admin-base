import { FC } from 'react'
import styles from './styles'

export const Watermark: FC = () => {
    return (
        <div className={styles.waterMarkContainer}>
            <div className={styles.waterMarkText}>
                Copywrite CodeLaik. All rights reserved
            </div>
            <div className={styles.waterMarkText}>Webdesign by CodeLaik</div>
        </div>
    )
}
