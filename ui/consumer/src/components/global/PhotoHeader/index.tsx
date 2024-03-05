import { FC } from 'react'
import styles from './styles'

interface IPhotoHeader {
    image?: string
    heading?: string
}

const PhotoHeader: FC<IPhotoHeader> = ({
    image = 'https://picsum.photos/1200/400',
    heading = `<h1 class="text-5xl text-white text-center" >Welcome to Admin Base</h1><h2 class="text-2xl text-center text-white">A Base for Future Web Endeavors</h2>`,
}) => {
    return (
        <div className={styles.container}>
            <img className={styles.image} alt="headerPhoto" src={image} />
            <div
                className={styles.customHTMLContainer}
                dangerouslySetInnerHTML={{
                    __html: heading,
                }}
            />
        </div>
    )
}

export default PhotoHeader
