const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
  res.send('Get All user')
})

app.post('/users', (req, res) => {
  res.send('Got a Post user')
})

app.put('/users/:id', (req, res) => {
  res.send('Got a update user')
})

app.delete('/users/:id', (req, res) => {
  res.send('Got a delete user')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})