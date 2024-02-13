import { Role } from "../../../types/entities"

const pages = [
    {
        title: 'main',
        path: '/g',
    },
    {
        title: 'second',
        path: '/t',
    },
    {
        title: 'third',
        path: '/o',
    },
    {
        title: 'fourth',
        path: '/y',
    },
    {
        title: 'fifth',
        path: '/e',
    },
]

const admin = [
    {
        title: 'Users',
        path: '/admin/users',
    },
]

const baseOptions = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Pages',
        dropdown: pages
    }
]

const AdminOptions = [
    ...baseOptions,
    {
        title: 'Analytics',
        path: '/analytics'
    }
]

const SuperAdminOptions = [
    ...AdminOptions,
    {title: 'admin', dropdown: admin}

]

export const navbarOptions = {
    [Role.SUPER_ADMIN]: SuperAdminOptions,
    [Role.ADMIN]: AdminOptions,
    [Role.MODERATOR]: baseOptions
}
