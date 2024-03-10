import { FC } from 'react'
import styles from './styles'
import { ParallaxBanner } from 'react-scroll-parallax'

interface IPhotoHeader {
    image?: string
    heading?: string
    speed?: number
}

const PhotoHeader: FC<IPhotoHeader> = ({
    image = 'https://picsum.photos/1200/800',
    heading = `<h1 class="text-5xl text-white text-center" >Welcome to Admin Base</h1><h2 class="text-2xl text-center text-white">A Base for Future Web Endeavors</h2>`,
    speed = 40,
}) => {
    return (
        <ParallaxBanner
            layers={[{ image, speed }]}
            className={styles.container}
        >
            <div
                className={styles.customHTMLContainer}
                dangerouslySetInnerHTML={{
                    __html: heading,
                }}
            />
        </ParallaxBanner>
    )
}

export default PhotoHeader
