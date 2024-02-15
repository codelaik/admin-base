import { Request, Response } from 'express'
import db from '../prisma'
import { AuditLog } from '@prisma/client';

const getAuditsWithLimit = async (limit: number, page: number) => {
    const audits = await db.auditLog.findMany({
        skip: page * limit,
        take: limit
    })
    return audits
}

export const getAllAudits = async (req: Request, res: Response) => {
    let audits: AuditLog[] = [];
    if (req.query.limit) {
        const limit = Number(req.query.limit);
        const page: number = Number(req.query.page) || 0;
        audits = await getAuditsWithLimit(limit, page)
        return res.json(audits)
    }
    
    audits = await db.auditLog.findMany()
    res.json(audits)
}