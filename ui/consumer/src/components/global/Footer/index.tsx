import { FC } from 'react'
import { Watermark } from './Watermark'
import { FooterItemList } from './FooterListItem'

const list = [
    {
        title: 'Example List One',
        items: [
            { title: 'item1', link: 'https://www.example.com' },
            { title: 'item2' },
            { title: 'item3' },
        ],
    },
    {
        title: 'Example List Two',
        items: [{ title: 'item1' }, { title: 'item2' }],
    },
    {
        title: 'Example List Three',
        items: [
            { title: 'item1' },
            { title: 'item2' },
            { title: 'item3' },
            { title: 'item 4' },
        ],
    },
    {
        title: 'Example List Four',
        items: [{ title: 'item1' }, { title: 'item2' }, { title: 'item3' }],
    },
]

const Footer: FC = () => {
    return (
        <div className="bg-black text-center">
            <div className="flex flex-col lg:flex-row justify-around bg-zinc-900 p-6 lg:p-4">
                {list.map((list) => (
                    <FooterItemList items={list.items} title={list.title} />
                ))}
            </div>
            <Watermark />
        </div>
    )
}

export default Footer
