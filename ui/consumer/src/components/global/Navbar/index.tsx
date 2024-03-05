import { FC, useState } from 'react'

const Navbar: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    const changeMenuState = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className="flex justify-between w-full h-12 bg-black">
            <div className="text-2xl padding-0">Admin-Base</div>
            <button
                onClick={changeMenuState}
                className="lg:hidden flex flex-col justify-center items-center px-2"
            >
                <span
                    className={`bg-white block transition-all duration-300 ease-out h-1 w-6 rounded-sm py-0.5 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}
                />
                <span
                    className={`bg-white block transition-all duration-300 ease-out h-1 w-6 rounded-sm py-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
                />
                <span
                    className={`bg-white block transition-all duration-300 ease-out h-1 w-6 rounded-sm py-0.5 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}
                />
            </button>
            <ul className="hidden lg:block">
                <a href="/" className="text-lg m-2 text-white">
                    Item 1
                </a>
                <a href="/" className="text-lg m-2 text-white">
                    Item 2
                </a>
                <a href="/" className="text-lg m-2 text-white">
                    Item 3
                </a>
            </ul>
        </div>
    )
}

export default Navbar
