const Koa = require('koa');
const app = new Koa();
const host = process.env.HOST || 'localhost'
app.listen(3000)
console.log(`server is listening at http://${host}:${3000}`)
