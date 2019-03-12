const Koa = require("koa")

// const bodyParser = require('koa-bodyparser')

// // 注意require('koa-router')返回的是函数:
// const router = require("koa-router")()
// const controller = require('./controllers');


const app = new Koa()

// app.use(async(ctx, next) => {
//     console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
//     await next()
// })

// app.use(bodyParser())
// app.use(controller())

// //add router middleware
// app.use(router.routes())

// 导入WebSocket模块:
const WebSocket = require('ws');

// 引用Server类:
const WebSocketServer = WebSocket.Server;

// 实例化:
const wss = new WebSocketServer({
    port: 3000
});

wss.on('connection', function(ws) {
    console.log(`[SERVER] connection()`);
    ws.on('message', function(message) {
        console.log(`[SERVER] Received: ${message}`);
        ws.send(`ECHO: ${message}`, (err) => {
            if (err) {
                console.log(`[SERVER] error: ${err}`);
            }
        })
    })
})

// app.listen(3000)

// console.log('app started at port 3000...');