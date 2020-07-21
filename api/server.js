const express = require('express')
const cors = require('CORS')

const server = express()

// import routers
const taskRouter = require('./data/routers/tasks-router')

server.use(express.json())
server.use(cors())

// err mw
server.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({msg: 'something went wrong...'})
  next()
})

// init routers
server.use('/', taskRouter)

module.exports = server