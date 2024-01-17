import express from 'express'
import { createUser } from '../../lib/User/User'
import { aduitLogMiddleware } from '../../middleware/audit'
import { AUDIT_TYPE } from '../../types'

const router = express.Router()

router.post('/users', createUser)

export default router
