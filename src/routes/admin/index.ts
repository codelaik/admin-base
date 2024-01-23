import express from 'express'
import {
    createUser,
    disableUser,
    enalbeUser,
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
router.post(
    '/users',
    passport.authenticate('jwt', { session: false }),
    createUser
)
router.post(
    '/users/:id/disable',
    passport.authenticate('jwt', { session: false }),
    disableUser
)
router.post(
    '/users/:id/enable',
    passport.authenticate('jwt', { session: false }),
    enalbeUser
)
router.post('/users/login', loginUser)
export default router
