const Koa = require('koa')

const app = new Koa()

app.use(async (ctx, next) =>{
    const start = new Date().getTime()
    await next()
    const ms = new Date().getTime() - start
    console.log(`${ctx.request.method} ${ctx.request.url}: ${ms}ms`);
    ctx.reponse.set('X-Response-Time', `${ms}ms`)

})

app.use(async (ctx, next) => {
    var name = ctx.request.query.name || 'word'
    ctx.reponse.body.type = 'text/html'
    ctx.reponse.body = `<h1>hello, ${name}</h1>`
})

module.exports = app