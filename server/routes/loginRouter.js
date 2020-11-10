import Router from 'koa-router'
import loginController from '../controller/LoginController'

const router = new Router()
router.prefix('/login')

router.post('/login',loginController.login)

export default router