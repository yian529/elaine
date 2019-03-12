const todolist = require('../models/todolist.js');

const getTodolist = async () => {
  const id = this.params.id; // 获取url里传过来的参数里的id
  const result = await todolist.getTodolistById(id);  // 通过yield “同步”地返回查询结果
  this.body = result // 将请求的结果放到response的body里返回
}

const createTodolist = async () => {
  const data = this.request.body;
  const result = await todolist.createTodolist(data);

  this.body = {
    success: true
  }
}

const removeTodolist = async () => {
  const id = this.params.id;
  const user_id = this.params.userId;
  const result = await todolist.removeTodolist(id,user_id);

  this.body = {
    success: true
  }
}

const updateTodolist = async () => {
  const id = this.params.id;
  const user_id = this.params.userId;
  let status = this.params.status; 
  status == '0' ? status = true : status =  false;// 状态反转（更新）

  const result = await todolist.updateTodolist(id,user_id,status);

  this.body = {
    success: true
  }
}

module.exports = (router) => {
  router.get('/todolist/:id', getTodolist),
  router.post('/todolist', createTodolist),
  router.delete('/todolist/:userId/:id', removeTodolist),
  router.put('/todolist/:userId/:id/:status', updateTodolist)
}