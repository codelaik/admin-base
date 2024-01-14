import Express from 'express'
import Logger from './src/lib/logger'

const app = Express()
const port = process.env.PORT || 8081

app.listen(port, () => {
    Logger.info(`Server is running at http://localhost:${port}`)
})
