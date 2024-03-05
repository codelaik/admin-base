const styles = {
    container: "flex justify-between w-full h-12 bg-black z-50",
    title: "text-2xl padding-0",
    desktopList: "hidden lg:block",
    button: "lg:hidden flex flex-col justify-center items-center px-6 w-2",
    topButtonBar: (isMenuOpen: boolean) => `bg-white block transition-all duration-300 ease-out h-1 w-6 rounded-sm py-0.5 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`,
    middleButtonBar: (isMenuOpen: boolean) => `bg-white block transition-all duration-300 ease-out h-1 w-6 rounded-sm py-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`,
    bottomButtonBar: (isMenuOpen: boolean) => `bg-white block transition-all duration-300 ease-out h-1 w-6 rounded-sm py-0.5 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`,
    menuItems: (isDesktop: boolean) =>  `text-sm m-4 text-${isDesktop ? 'white' : 'black'} p-6 m-0 border-b-[1px]`,
    mobileMenuContainer: (isMenuOpen: boolean) => `${isMenuOpen ? 'opacity-100' : 'hidden opacity-0'} transition-all w-full h-full z-0 duration-500 ease-out`,
    mobileMenuList: "flex absolute top-12 flex-col w-full bg-white z-50  last-child:border-b-[0px]"
}

export default styles