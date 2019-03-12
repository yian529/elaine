const db = require('../config/db.js'),
    userModel = '../schema/user.js';
const ToDoListDb = db.Todolist

const user = ToDoListDb.import(userModel)

const getUserById = async function (id) {
    const userInfo = await user.findOne({
        where:{
            id:id
        }
    })
    return userInfo
} 
const getUserByName  = async function (name) {
    const userInfo = await user.findOne({
        where:{
            user_name:name
        }
    })
    return userInfo
} 

module.exports = {
    getUserById,
    getUserByName
}