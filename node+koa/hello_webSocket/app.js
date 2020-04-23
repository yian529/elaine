// 导入WebSocket模块:
const WebSocket = require('ws');

// 引用Server类:
const WebSocketServer = WebSocket.Server;

// 实例化，3000端口上打开了一个WebSocket Server，该实例由变量wss引用
const wss = new WebSocketServer({
    port: 3000
});

//如果有WebSocket请求接入，wss对象可以响应connection事件来处理这个WebSocket：
// 在connection事件中，回调函数会传入一个WebSocket的实例，表示这个WebSocket连接。
// 对于每个WebSocket连接，我们都要对它绑定某些事件方法来处理不同的事件。这里，我们通过响应message事件，在收到消息后再返回一个ECHO: xxx的消息给客户端。
wss.on('connection', function (ws) {
    console.log(`[SERVER] connection()`);
    ws.on('message', function (message) {
        console.log(`[SERVER] Received: ${message}`);
        ws.send(`ECHO: ${message}`, (err) => {
            if (err) {
                console.log(`[SERVER] error: ${err}`);
            }
        });
    })
});