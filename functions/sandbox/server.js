require('dotenv').config()
const catalyst = require('zcatalyst-sdk-node')
const express = require('express')
const app = express()

// @Routes
const books = require('./routes/books')
const crm = require('./routes/crm')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req, res) => {
  res.status(200).send({
    code: 0,
    status: 'ok',
  })
})

app.get('/users', async (req, res) => {
  const catalystApp = catalyst.initialize(req)
  const zcql = catalystApp.zcql()
  const query = 'SELECT * FROM Users'
  let zcqlPromise = zcql.executeZCQLQuery(query)
  zcqlPromise.then((queryResult) => {
    console.log(queryResult)
    res.send({ queryResult })
  })
})

app.use('/crm', crm)
app.use('/books', books)

module.exports = app
