import { FC } from 'react'
import styles from './styles'

type item = {
    title: string
    link?: string
}

interface IFooterItemList {
    title: string
    items: item[]
}

export const FooterItemList: FC<IFooterItemList> = ({ title, items }) => {
    return (
        <div className={styles.listContainer}>
            <div className={styles.listTitle}>{title}</div>
            {items.map(({ title, link }) => {
                if (link) {
                    return (
                        <a className={styles.listItem} href={link}>
                            {title}
                        </a>
                    )
                }
                return <div className={styles.listItem}>{title}</div>
            })}
        </div>
    )
}
