// url 模块用于处理与解析 URL
const url = require('url');

// a Node.js WebSocket library
const ws = require('ws');

const Cookies = require('cookies');

const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

const controller = require('./controller');

const templating = require('./templating');

const WebSocketServer = ws.Server;

const app = new Koa();

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// parse user from cookie:
app.use(async (ctx, next) => {
    ctx.state.user = parseUser(ctx.cookies.get('name') || '');
    await next();
});

// static file support:
let staticFiles = require('./static-files');
app.use(staticFiles('/static/', __dirname + '/static'));

// parse request body:
app.use(bodyParser());

// add nunjucks as view:
app.use(templating('views', {
    noCache: true,
    watch: true
}));

// add controller middleware:
app.use(controller());

let server = app.listen(3000);

function parseUser(obj) {
    if (!obj) {
        return;
    }
    console.log('try parse: ' + obj);
    let s = '';
    if (typeof obj === 'string') {
        s = obj;
    } else if (obj.headers) {
        let cookies = new Cookies(obj, null);
        s = cookies.get('name');
    }
    if (s) {
        try {
            let user = JSON.parse(Buffer.from(s, 'base64').toString());
            console.log(`User: ${user.name}, ID: ${user.id}`);
            return user;
        } catch (e) {
            // ignore
        }
    }
}

function createWebSocketServer(server, onConnection, onMessage, onClose, onError) {
    let webSocketServer = new WebSocketServer({
        server: server
    });
    webSocketServer.broadcast = function broadcast(data) {
        webSocketServer.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === ws.OPEN) {
                client.send(data);
            }
        });
    };
    onConnection = onConnection || function () {
        console.log('[WebSocket] connected.');
    };
    onMessage = onMessage || function (msg) {
        console.log('[WebSocket] message received: ' + msg);
    };
    onClose = onClose || function (code, message) {
        console.log(`[WebSocket] closed: ${code} - ${message}`);
    };
    onError = onError || function (err) {
        console.log('[WebSocket] error: ' + err);
    };
    webSocketServer.on('connection', function (ws,request) {
        let location = '/'
        if (request && request.url) {
            location = url.parse(request.url, true);
            console.log('[WebSocketServer] connection: ' + location.href);
        }
        ws.on('message', onMessage);
        ws.on('close', onClose);
        ws.on('error', onError);
        if (location && location.pathname !== '/ws/chat') {
            // close ws:
            ws.close(4000, 'Invalid URL');
        }
        // check user:
        let user = parseUser(request);
        if (!user) {
            ws.close(4001, 'Invalid user');
        }
        ws.user = user;
        ws.webSocketServer = webSocketServer;
        //webSocketServer.clients = ws
        onConnection.apply(ws);
    });
    console.log('WebSocketServer was attached.');
    return webSocketServer;
}

var messageIndex = 0;

function createMessage(type, user, data) {
    messageIndex ++;
    return JSON.stringify({
        id: messageIndex,
        type: type,
        user: user,
        data: data
    });
}

function onConnect() {
    let user = this.user;
    let msg = createMessage('join', user, `${user.name} joined.`);
    this.webSocketServer.broadcast(msg);
    let users = this.webSocketServer.clients.forEach(function each(client) {   
        return client.user;
    });
    this.send(createMessage('list', user, users));
}

function onMessage(message) {
    console.log(message);
    if (message && message.trim()) {
        let msg = createMessage('chat', this.user, message.trim());
        this.webSocketServer.broadcast(msg);
    }
}

function onClose() {
    let user = this.user;
    let msg = createMessage('left', user, `${user.name} is left.`);
    this.webSocketServer.broadcast(msg);
}

app.webSocketServer = createWebSocketServer(server, onConnect, onMessage, onClose);

console.log('app started at port 3000...');
