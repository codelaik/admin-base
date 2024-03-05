import { FC } from 'react'

interface IPhotoHeader {
    image?: string
    heading?: string
}

const PhotoHeader: FC<IPhotoHeader> = ({
    image = 'https://picsum.photos/1800/600',
    heading = `<h1 class="text-5xl text-white text-center" >Welcome to Admin Base</h1><h2 class="text-2xl text-center text-white">A Base for Future Web Endeavors</h2>`,
}) => {
    return (
        <div className="w-full relative">
            <img className="w-full h-96 object-cover" src={image} />
            <div
                className="absolute h-96 w-full flex flex-col justify-end bottom-0 mb-6 [&_*]:my-3"
                dangerouslySetInnerHTML={{
                    __html: heading,
                }}
            />
        </div>
    )
}

export default PhotoHeader
