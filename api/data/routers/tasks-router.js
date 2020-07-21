const express = require('express')
const db = require('./tasks-model')

const tasks = express.Router()

tasks.get('/api/tasks', async(req, res, next) => {
  try{
    const tasks = await db.find()

    res.status(200).json(tasks)
  }
  catch(err) {next(err)}
})

tasks.post('/api/tasks', async(req, res, next) => {
  try {
    const newTask = await db.add(req.body)

    res.status(201).json({msg: 'task created'})
  }
  catch(err) {next(err)}
})

tasks.delete('/api/tasks/:id', async(req, res, next) => {
  try {
    const deletedTask = await db.remove(req.params.id)
    
    res.status(204).json({msg: 'task deleted'})
  }
  catch(err) {next(err)}
})

module.exports = tasks