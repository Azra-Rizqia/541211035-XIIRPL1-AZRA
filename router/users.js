const express = require('express')
const router = express.Router()

router.get('/users', (req, res) => {
  res.send('Get All user')
})

router.post('/users', (req, res) => {
  res.send('Got a Post user')
})

router.put('/users/:id', (req, res) => {
  res.send('Got a update user')
})

router.delete('/users/:id', (req, res) => {
  res.send('Got a delete user')
})

module.exports = router