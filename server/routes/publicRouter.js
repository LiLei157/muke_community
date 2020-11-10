import Router from 'koa-router'
import publicController from '../controller/PublicController'

const router = new Router()
router.prefix('/public')

router.get('/getCode',publicController.getCode)

export default router