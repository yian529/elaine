const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()
const json = require('koa-json')
const logger = require('koa-logger')
const auth = require('./server/routes/auth.js'); // 引入auth
const api = require('./server/routes/api.js')
const jwt = require('koa-jwt')
const path = require('path')
const serve = require('koa-static')
const historyApiFallback = require('koa-history-api-fallback'); // 引入依赖

app.use(require('koa-bodyparser')())
app.use(json())
app.use(logger())
app.use(async (ctx, next) => {
  let start = new Date();
  await next();
  let ms = new Date() - start;
  console.log('%s %s - %s', this.method, this.url, ms) // 显示执行的时间
})

app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    if (401 === err.status) {
      this.status = 401
      this.body = {
        success:false,
        token:null,
        info:'Protected resource, use Authorization header to get access'
      }
    } else {
      
    console.log('err:', err) // 显示执行的时间
    }
  }
})

app.on('error', (err, ctx) => {
  console.log('server error', err)
})

router.use('/auth', auth.routes()) // 挂载到koa-router上，同时会让所有的auth的请求路径前面加上'/auth'的请求路径。
router.use('/api', api.routes()) // 所有走/api/打头的请求都需要经过jwt验证。

app.use(router.routes()) // 将路由规则挂载到Koa上。

app.use(historyApiFallback()); // 在这个地方加入。一定要加在静态文件的serve之前，否则会失效。

app.use(serve(path.resolve('dist'))); // 将webpack打包好的项目目录作为Koa静态文件服务的目录


app.listen(8889, () => {
  console.log('Koa is listening in 8889')
})


module.exports = app
