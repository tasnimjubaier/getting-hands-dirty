var express = require('express')
var mongoose = require('mongoose')
var Task = require('./api/models/todoListModel')
var bodyParser = require('body-parser')
var app = express()
var taskRoutes = require('./api/routes/todoListRoutes')
var postRoute = require('./api/routes/postsRoutes')
var drupalRoute = require('./api/routes/drupalCMS')
const axios = require('axios')

const port = process.env.PORT || 3003

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/TodoDB')

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

app.listen(port)
console.log('app running on port : ' + port)


taskRoutes(app)
postRoute(app)
drupalRoute(app)

app.use((req, res) => {
    res.status(404).send({ url : req.originalUrl + ' not found'})
})

