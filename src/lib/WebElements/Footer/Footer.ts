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
    items: { title: string; link?: string }[]
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

    const { items } = req.body as reqList
    const createdItems: any[] = []

    for (const item of items) {
        const newItem = await db.footerItem.create({
            data: { ...item, listId },
        })
        createdItems.push(newItem)
    }

    await addAuditLog(
        user,
        AUDIT_TYPE.CREATED_FOOTER_LIST_ITEMS,
        createFooterListAudit(listId, createdItems)
    )

    res.json({ items: createdItems })
}
