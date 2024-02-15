import express from 'express'
import {
    createUserAsAdmin,
    updateUserDisabled,
    updateUserRole,
    getAdminUsers,
    getUser,
    loginUser,
} from '../../lib/User/User'
import passport from 'passport'
import { getAllAudits } from '../../lib/Audit/audit'

const router = express.Router()

//User routes
router.get(
    '/users/current',
    passport.authenticate('jwt', { session: false }),
    getUser
)
router.post(
    '/users',
    passport.authenticate('jwt', { session: false }),
    getAdminUsers
)
router.post(
    '/users/create',
    passport.authenticate('jwt', { session: false }),
    createUserAsAdmin
)
router.post(
    '/users/:id/disable',
    passport.authenticate('jwt', { session: false }),
    updateUserDisabled
)
router.post(
    '/users/:id/role',
    passport.authenticate('jwt', { session: false }),
    updateUserRole
)
router.post('/users/login', loginUser)

//audit routes
router.get(
    '/audits',
    // passport.authenticate('jwt', { session: false }),
    getAllAudits
)
export default router
