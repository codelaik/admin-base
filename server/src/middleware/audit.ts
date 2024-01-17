import { Response, NextFunction } from 'express'
import { AUDIT_TYPE, ReqWithUser } from '../types'
import db from '../lib/prisma'
import { User } from '@prisma/client'

export const aduitLogMiddleware =
    (type: AUDIT_TYPE) =>
    (req: ReqWithUser, res: Response, next: NextFunction) => {
        switch (type) {
            case AUDIT_TYPE.VIEW:
                return next()
            case AUDIT_TYPE.CREATED_ACCOUNT:
                db.auditLog.create({
                    data: {
                        type,
                        action: req.body.username,
                        userId: req?.user?.id,
                    },
                })
                return next()
            case AUDIT_TYPE.DISABLED_ACCOUNT:
                db.auditLog.create({
                    data: {
                        type,
                        action: req.body.username,
                        userId: req?.user?.id,
                    },
                })
                return next()
            default:
                return next()
        }
    }
