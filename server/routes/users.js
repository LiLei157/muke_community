const router = require('koa-router')()
import svgCaptcha from 'svg-captcha'
// import {getCode} from '../controller/user/user.js'

router.prefix('/users')

router.get('/', async (ctx, next)=> {
  ctx.body = 'this is a users response!'
})

router.get('/bar', async (ctx, next)=> {
  ctx.body = 'this is a users/bar response'
})
router.post('/getcode', async(ctx,next) =>{
  const captcha = svgCaptcha.create({
    size:4,
    noise:2,
    color:true,
    background:"#ccc"
  })
  ctx.body = {
    code:0,
    msg:'测试成功',
    data:captcha.data
  }
})

module.exports = router
