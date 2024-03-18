import { Request, Response } from 'express'
import db from '../prisma'
import { AuditLog, User } from '@prisma/client'
import { AUDIT_TYPE } from '../../types'

/**
 *
 * @param user User initiating the action
 * @param type Type of action taking place
 * @param action What the action results in
 */
export const addAuditLog = async (
    user: User,
    type: AUDIT_TYPE,
    action: string
) => {
    await db.auditLog.create({
        data: {
            type,
            action: action,
            userId: user.id,
        },
    })
}

export const createFooterListAudit = (id: number, items: any[]) => {
    const itemTitles = items.map((item) => item.title)
    return `${id}::${itemTitles.join(':')}`
}

const getAuditsWithLimit = async (limit: number, page: number) => {
    const audits = await db.auditLog.findMany({
        skip: page * limit,
        take: limit,
    })
    return audits
}

export const getAllAudits = async (req: Request, res: Response) => {
    let audits: AuditLog[] = []
    if (req.query.limit) {
        const limit = Number(req.query.limit)
        const page: number = Number(req.query.page) || 0
        audits = await getAuditsWithLimit(limit, page)
        return res.json(audits)
    }

    audits = await db.auditLog.findMany()
    res.json(audits)
}
