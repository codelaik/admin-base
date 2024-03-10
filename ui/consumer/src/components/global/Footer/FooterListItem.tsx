import { FC } from 'react'

type item = {
    title: string
    link?: string
}

interface IFooterItemList {
    title: string
    items: item[]
}

export const FooterItemList: FC<IFooterItemList> = ({ title, items }) => {
    const itemStyling =
        'text-2xl lg:text-base text-left font-thin text-white p-1'
    return (
        <div className="flex flex-col justify-left items-left text-center md:text-left p-4 text-white  w-90 lg:w-auto">
            <div className="pb-2  text-2xl lg:text-base text-left">{title}</div>
            {items.map(({ title, link }) => {
                if (link) {
                    return (
                        <a className={itemStyling} href={link}>
                            {title}
                        </a>
                    )
                }
                return <div className={itemStyling}>{title}</div>
            })}
        </div>
    )
}
