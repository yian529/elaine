const Koa = require('koa');
const app = new Koa();

//Koa 提供一个 Context 对象，表示一次对话的上下文（包括 HTTP 请求和 HTTP 回复）。通过加工这个对象，就可以控制返回给用户的内容。
//Context.response.body属性就是发送给用户的内容
const main = ctx => {
	ctx.response.body = 'Hello elaine';
}
//app.use方法加载main函数
app.use(main);
app.listen(3000);
