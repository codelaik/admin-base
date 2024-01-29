import express from 'express'
import {
    createUser,
    disableUser,
    enableUser,
    getAdminUsers,
    getUser,
    loginUser,
} from '../../lib/User/User'
import passport from 'passport'

const router = express.Router()

//GET routes
router.get(
    '/users/current',
    passport.authenticate('jwt', { session: false }),
    getUser
)
router.get(
    '/users',
    passport.authenticate('jwt', { session: false }),
    getAdminUsers
)

//POST routes
if (process.env.NODE_ENV === 'development') {
    router.post(
        '/users',
        passport.authenticate('jwt', { session: false }),
        createUser
    )
}
router.post(
    '/users/:id/disable',
    passport.authenticate('jwt', { session: false }),
    disableUser
)
router.post(
    '/users/:id/enable',
    passport.authenticate('jwt', { session: false }),
    enableUser
)
router.post('/users/login', loginUser)
export default router
