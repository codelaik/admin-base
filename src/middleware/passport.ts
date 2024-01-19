import { Strategy, ExtractJwt, StrategyOptions } from 'passport-jwt'
import db from '../lib/prisma'

const jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
const secretOrKey = process.env.SECRET_OR_KEY
const options: StrategyOptions = {
    jwtFromRequest,
    secretOrKey,
}

export const initializePassport = async (passport: any) => {
    passport.use(
        new Strategy(options, async (jwt_payload, done) => {
            const user = await db.user.findUnique({
                where: {
                    id: jwt_payload.id,
                },
            })
            if (user) {
                // return the user
                return done(null, user)
            }
            // return false since there is no user
            return done(null, false)
        })
    )
}
