import express from 'express'
import {
    createUser,
    disableUser,
    enalbeUser,
    loginUser,
} from '../../lib/User/User'
import passport from 'passport'

const router = express.Router()

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
router.post('/users/current', passport.authenticate('jwt', { session: false }))
router.post('/users/login', loginUser)

export default router
