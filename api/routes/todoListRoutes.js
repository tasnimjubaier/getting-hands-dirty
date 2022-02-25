'use strict'

const handler = (app) => {
    var todoList = require('../controllers/todoListController')

    app.route('/tasks').get(todoList.listAllTasks).post(todoList.createATask)

    app.route('/tasks/:taskId').get(todoList.readATask).put(todoList.updateATask).delete(todoList.deleteATask)
}

module.exports = handler