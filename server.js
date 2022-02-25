var express = require('express')
var mongoose = require('mongoose')
var Task = require('./api/models/todoListModel')
var routes = require('./api/routes/todoListRoutes')
var bodyParser = require('body-parser')
var app = express()

const port = process.env.PORT || 3000

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/TodoDB')

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

routes(app);

app.listen(port)

console.log('app running on port : ' + port)

app.get("/", (req, res) => {
    res.send("hi there. thanks for reaching out. your request object is : " + req)
    return ;
})
app.use((req, res) => {
    res.status(404).send({ url : req.originalUrl + ' not found'})
})