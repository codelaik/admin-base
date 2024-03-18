import express from 'express'
import adminRouter from './admin/'
import { getFooterLists } from '../lib/WebElements/Footer/Footer'
const router = express.Router()

router.use('/admin', adminRouter)

router.get('/webpages/footer', getFooterLists)

export default router
