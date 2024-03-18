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
import {
    createFooterItems,
    createFooterList,
} from '../../lib/WebElements/Footer/Footer'
import { authenticatedRoute } from '../../utils'

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

//webpages
router.post(
    '/webpages/footer',
    passport.authenticate('jwt', { session: false }),
    createFooterList
)
router.post(
    '/webpages/footer/:id',
    passport.authenticate('jwt', { session: false }),
    createFooterItems
)

//audit routes
router.get(
    '/audits',
    passport.authenticate('jwt', { session: false }),
    getAllAudits
)
export default router
