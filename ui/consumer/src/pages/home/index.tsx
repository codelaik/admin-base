import { FC } from 'react'
import PhotoHeader from '../../components/global/PhotoHeader'

const Home: FC = () => {
    return (
        <div>
            <PhotoHeader />
            <div className="h-screen flex flex-col justify-center items-center  bg-black p-6">
                <div className="font-bold text-xl text-white p-6">
                    Example paragraph
                </div>
                <div className="text-xl text-white px-8 w-screen overflow-wrap text-center">
                    He wandered down the stairs and into the basement. The damp,
                    musty smell of unuse hung in the air. A single, small window
                    let in a glimmer of light, but this simply made the shadows
                    in the basement deeper. He inhaled deeply and looked around
                    at a mess that had been accumulating for over 25 years. He
                    was positive that this was the place he wanted to live.
                </div>
            </div>
        </div>
    )
}

export default Home
