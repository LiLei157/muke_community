import Router from 'koa-router'
import loginController from '../controller/LoginController'

const router = new Router()
router.prefix('/login')
// 登录
router.post('/login',loginController.login)
// 注册
router.post('/register',loginController.register)

export default router