'use strict'
var mongoose = require('mongoose')
var schema = mongoose.Schema;


var TaskSchema = new schema({
    name : {
        type : String,
        required : "Kindly enter the name of the task"
    },
    Created_Date : {
        type : Date,
        default : Date.now
    },
    status : {
        type : [{
            type : String,
            enum : ['pending', 'ongoing', 'completed']
        }],
        default : ['pending']
    }
})

module.exports = mongoose.model('Tasks', TaskSchema)
