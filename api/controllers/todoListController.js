'use strict'

var mongoose = require('mongoose')
var Task = mongoose.model('Tasks')

const listAllTasks = (req, res) => {
    Task.find({}, (err, task) => {
        if(err)
            res.send(err)
        res.json(task)
    })
}

const createATask = (req, res) => {
    var newTask = new Task(req.body)
    newTask.save((err, task) => {
        if(err)
            res.send(err)
        res.json(task)
    })
}

const readATask = (req, res) => {
    Task.findById(req.params.taskId, (err, task) => {
        if(err) 
            req.send(err)
        req.json(task)
    })
}

const updateATask = (req, res) =>{
    Task.findOneAndUpdate({_id : req.params.taskId}, req.body, {new : true}, (err, task) => {
        if(err)
            res.send(err)
        res.json(task)
    })
}

const deleteATask = (req, res) => {
    Task.remove({_id : req.params.taskId}, (err, task) => {
        if(err)
            res.send(err)
        res.json(task)
    })
}

module.exports = { listAllTasks, createATask, readATask, updateATask, deleteATask }