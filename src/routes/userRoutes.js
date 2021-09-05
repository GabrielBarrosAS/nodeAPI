import { Router } from 'express'
import userController from '../controllers/userController.js'
const routes = Router()

routes.get('/',userController.req1)

export default routes