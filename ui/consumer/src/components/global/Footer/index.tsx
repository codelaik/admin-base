import { FC } from 'react'
import { Watermark } from './Watermark'
import { FooterItemList } from './FooterListItem'
import styles from './styles'
import { list } from './itemsList'

const Footer: FC = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerItemsContainer}>
                {list.map((list) => (
                    <FooterItemList items={list.items} title={list.title} />
                ))}
            </div>
            <Watermark />
        </div>
    )
}

export default Footer
