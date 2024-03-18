import { Role, User } from '@prisma/client'
import { Request, Response } from 'express'
import { AUDIT_TYPE, ResponseStatus } from '../../../types'
import { hasPermissions } from '../../../utils'
import db from '../../prisma'
import { addAuditLog, createFooterListAudit } from '../../Audit/audit'

const getAdminUsersRoles = [Role.SUPER_ADMIN, Role.ADMIN]

const getFooterListsBase = async () => {
    const footerLists = await db.footerList.findMany({
        include: { items: true },
    })

    return footerLists
}

export const getFooterLists = async (_: Request, res: Response) => {
    const rawFooterLists = await getFooterListsBase()
    res.json({
        lists: rawFooterLists,
    })
}

export const getAdminFooterLists = async (req: Request, res: Response) => {
    const user = req.user as User
    if (hasPermissions(user, getAdminUsersRoles)) {
        res.status(500).json({
            status: ResponseStatus.FAILED,
            errorMessage: 'Insuffient User Persmissions',
        })
        return
    }
    const rawFooterLists = await getFooterListsBase()
    res.json({
        lists: rawFooterLists,
    })
}

type reqList = {
    title: string
    item: { title: string; link?: string }
}

export const createFooterList = async (req: Request, res: Response) => {
    const user = req.user as User
    const { title } = req.body as reqList
    if (hasPermissions(user, getAdminUsersRoles)) {
        res.status(500).json({
            status: ResponseStatus.FAILED,
            errorMessage: 'Insuffient User Persmissions',
        })
        return
    }

    const footerList = await db.footerList.create({
        data: { title },
    })

    await addAuditLog(user, AUDIT_TYPE.CREATED_FOOTER_LIST, title)

    res.json({
        list: footerList,
    })
}

export const createFooterItems = async (req: Request, res: Response) => {
    const user = req.user as User
    const listId = Number(req.params.id)
    if (hasPermissions(user, getAdminUsersRoles)) {
        res.status(500).json({
            status: ResponseStatus.FAILED,
            errorMessage: 'Insuffient User Persmissions',
        })
        return
    }

    const { item } = req.body as reqList
    const createdItems: any[] = []

    const newItem = await db.footerItem.create({
        data: { ...item, listId },
    })
    createdItems.push(newItem)

    await addAuditLog(
        user,
        AUDIT_TYPE.CREATED_FOOTER_LIST_ITEM,
        createFooterListAudit(listId, createdItems)
    )

    res.json({ items: createdItems })
}

export const updateFooterItem = async (req: Request, res: Response) => {
    const user = req.user as User
    if (hasPermissions(user, getAdminUsersRoles)) {
        res.status(500).json({
            status: ResponseStatus.FAILED,
            errorMessage: 'Insuffient User Persmissions',
        })
        return
    }

    const id = Number(req.params.id)
    const { item } = req.body

    const updatedItem = await db.footerItem.update({
        where: { id },
        data: item,
    })

    await addAuditLog(
        user,
        AUDIT_TYPE.UPDATED_FOOTER_LIST_ITEM,
        createFooterListAudit(id, [item])
    )

    res.json({ item: updatedItem })
}

export const updateFooterList = async (req: Request, res: Response) => {
    const user = req.user as User
    if (hasPermissions(user, getAdminUsersRoles)) {
        res.status(500).json({
            status: ResponseStatus.FAILED,
            errorMessage: 'Insuffient User Persmissions',
        })
        return
    }

    const id = Number(req.params.id)
    const { list } = req.body

    const updatedItem = await db.footerList.update({
        where: { id },
        data: list,
        include: { items: true },
    })

    await addAuditLog(
        user,
        AUDIT_TYPE.UPDATED_FOOTER_LIST_TITLE,
        updatedItem.title
    )

    res.json({ item: updatedItem })
}

export const deleteFooterListItem = async (req: Request, res: Response) => {
    const user = req.user as User
    if (hasPermissions(user, getAdminUsersRoles)) {
        res.status(500).json({
            status: ResponseStatus.FAILED,
            errorMessage: 'Insuffient User Persmissions',
        })
        return
    }

    const id = Number(req.params.id)
    const deletedItem = await db.footerItem.delete({
        where: { id },
    })

    await addAuditLog(
        user,
        AUDIT_TYPE.DELETED_FOOTER_LIST,
        `${id}::${deletedItem.title}`
    )

    res.json({
        success: true,
    })
}

export const deleteFooterList = async (req: Request, res: Response) => {
    const user = req.user as User
    if (hasPermissions(user, getAdminUsersRoles)) {
        res.status(500).json({
            status: ResponseStatus.FAILED,
            errorMessage: 'Insuffient User Persmissions',
        })
        return
    }

    const id = Number(req.params.id)
    const deletedList = await db.footerList.delete({
        where: { id },
        include: { items: true },
    })

    for (const item of deletedList.items) {
        await db.footerItem.delete({ where: { id: item.id } })
    }

    await addAuditLog(
        user,
        AUDIT_TYPE.DELETED_FOOTER_LIST,
        `${id}::${deletedList.title}`
    )

    res.json({
        success: true,
    })
}
