import { AUDIT_TYPE } from '../types'
import db from './prisma'
import { User } from '@prisma/client'

/**
 *
 * @param user User initiating the action
 * @param type Type of action taking placw
 * @param action What the action results in
 */
export const addAuditLog = (user: User, type: AUDIT_TYPE, action: string) => {
    db.auditLog.create({
        data: {
            type,
            action: user.username,
            userId: user.id,
        },
    })
}
