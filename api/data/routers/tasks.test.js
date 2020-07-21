const server = require('../../server')
const db = require('../dbConfig')

const supertest = require('supertest')

beforeAll(async () => {
  await db.seed.run()
})

afterAll(async () => {
  await db.destroy()
}) 

// ---  GET REQ  ---
describe('task router', () => {
  describe('get tasks EP', () => {
    it('returns a 200 status code', async() => {
      await supertest(server).get('/api/tasks')
      .then(res => {
        expect(res.statusCode).toBe(200)
      })

    })
    it('returns an array of tasks', async() => {
      const expected = [
        {id: 1, description: 'first task'},
        {id: 2, description: 'second task'},
        {id: 3, description: 'third task'},
      ]

      await supertest(server).get('/api/tasks')

      .then(res => {
        expect.arrayContaining(expected)
      })
    })
  })

  // ---  POST REQ  ---

  describe('adding a task EP', () => {
    it('returns a 201 status code', async() => {
      await supertest(server).post('/api/tasks')
      .send({description: "pick up a cake"})
      .then(res => {
        expect(res.statusCode).toBe(201)
      })
    })
    it('returns successfully with no errors', async() => {
      await supertest(server).post('/api/tasks')
      .send({description: "pick up a cake"})
      .then(res => {
        expect(res.body).toBeDefined()
      })
    })
  })

  // ---  DELETE REQ  ---
  describe('delete task EP', () => {
    it('returns a 204 status code', async() => {
      await supertest(server).delete('/api/tasks/3')
      .then(res => {
        expect(res.statusCode).toBe(204)
      })
    })
    it('response is empty', async() => {
      await supertest(server).delete('/api/tasks/3')
      .then(res => {
        expect(res.body).toEqual({})
      })
    })
  })
})
