const styles = {
    container: "flex justify-between w-full h-12 bg-black",
    title: "text-2xl padding-0",
    desktopList: "hidden lg:block",
    button: "lg:hidden flex flex-col justify-center items-center px-2",
    topButtonBar: (isMenuOpen: boolean) => `bg-white block transition-all duration-300 ease-out h-1 w-6 rounded-sm py-0.5 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`,
    middleButtonBar: (isMenuOpen: boolean) => `bg-white block transition-all duration-300 ease-out h-1 w-6 rounded-sm py-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`,
    bottomButtonBar: (isMenuOpen: boolean) => `bg-white block transition-all duration-300 ease-out h-1 w-6 rounded-sm py-0.5 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`,
    menuItems: "text-lg m-2 text-white",
}

export default styles