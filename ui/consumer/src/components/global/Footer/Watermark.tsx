import { FC } from 'react'

export const Watermark: FC = () => {
    return (
        <div className="flex flex-col justify-center items-center p-4">
            <div className="text-xs text-white">
                Copywrite CodeLaik. All rights reserved
            </div>
            <div className="text-xs text-white">Webdesign by CodeLaik</div>
        </div>
    )
}
