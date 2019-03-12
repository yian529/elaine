
const todolist = require('../models/todolist.js')

const getTodolist = async function (ctx) {
  const id = this.params.id // 获取url里传过来的参数里的id
  const result = await todolist.getTodolistById(id) // 通过await “同步”地返回查询结果
  this.body = {
    success: true,
    result // 将请求的结果放到response的body里返回
  }
}

const createTodolist = async function (ctx) {
  const data = this.request.body
  const success = await todolist.createTodolist(data)
  this.body = {
    success
  }
}

const removeTodolist = async function (ctx) {
  const id = this.params.id
  const userId = this.params.userId
  const success = await todolist.removeTodolist(id, userId)

  this.body = {
    success
  }
}

const updateTodolist = async function (ctx) {
  const id = this.params.id
  const userId = this.params.userId
  let status = this.params.status
  status === '0' ? status = true : status = false// 状态反转（更新）

  const success = await todolist.updateTodolist(id, userId, status)

  this.body = {
    success
  }
}

module.exports = {
    getTodolist,
    createTodolist,
    removeTodolist,
    updateTodolist
}