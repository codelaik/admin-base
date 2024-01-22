import Express from 'express'
import Logger from './src/lib/logger'
import passport from 'passport'
import bodyParser from 'body-parser'
import { initializePassport } from './src/middleware/passport'
import cors from 'cors'
import apiRoutes from './src/routes/api'

//initialize express app
const app = Express()

//grab env variables
const port = process.env.PORT || 8081

//set up middlewares
app.use(cors({ origin: 'http://localhost:3001' }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(passport.initialize())
initializePassport(passport)

//load routes
app.use('/api', apiRoutes)

app.listen(port, () => {
    Logger.info(`Server is running at http://localhost:${port}`)
})
