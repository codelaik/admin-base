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

const router = express.Router()

//GET routes
router.get(
    '/users/current',
    passport.authenticate('jwt', { session: false }),
    getUser
)

//POST routes
// if (process.env.NODE_ENV === 'development') {
//     router.post('/users', createUser)
// }
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
export default router
