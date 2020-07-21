const express = require('express')
const cors = require('CORS')

const server = express()

// import routers
const taskRouter = require('./tasks/task-router')

server.use(express.json())
server.use(cors())

// err mw
server.use((err, req, res, next) => {
  console.log(err)
  next()
})

// init routers
server.use('/tasks', taskRouter)

module.exports = server