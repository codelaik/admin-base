import { Role } from "../../../types/entities"

const pages = [
    {
        title: 'Main',
        path: '/g',
    },
    {
        title: 'Second',
        path: '/t',
    },
    {
        title: 'Third',
        path: '/o',
    },
    {
        title: 'Fourth',
        path: '/y',
    },
    {
        title: 'Fifth',
        path: '/e',
    },
]

const admin = [
    {
        title: 'Users',
        path: '/admin/users',
    },
    {
        title: 'Audits',
        path: '/admin/audits'
    },
    {
        title: 'Analytics',
        path: '/analytics'
    }
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
    ...baseOptions
]

const SuperAdminOptions = [
    ...AdminOptions,
    {title: 'Admin', dropdown: admin},
]

export const navbarOptions = {
    [Role.SUPER_ADMIN]: SuperAdminOptions,
    [Role.ADMIN]: AdminOptions,
    [Role.MODERATOR]: baseOptions
}
