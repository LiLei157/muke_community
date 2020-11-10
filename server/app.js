const Koa = require('koa')

const app = new Koa()
import JWT from 'koa-jwt'
import compose from 'koa-compose'
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
import config from './conf/index'

const index = require('./routes/index')
import publicRouter from './routes/publicRouter'
import loginRouter from './routes/loginRouter'

const jwt = JWT({secret:config.JWT_SCRECT}).unless({ path:[/\/public/,/\/login/] })

// error handler
onerror(app)

// 通过koa-compose把每一个调用的中间件作为参数传递给compose，compose函数会自动帮我们调用,避免我们使用很多个app.use()注册中间件
const middlewares = compose([
  bodyparser({
    enableTypes:['json', 'form', 'text']
  }),
  json(),
  logger(),
  require('koa-static')(__dirname + '/public'),
  views(__dirname + '/views', {
    extension: 'pug'
  }),
  jwt
])

app.use(middlewares)

// routes
app.use(publicRouter.routes(),publicRouter.allowedMethods())
app.use(loginRouter.routes(),loginRouter.allowedMethods())
app.use(index.routes(), index.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
