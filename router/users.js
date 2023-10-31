const express = require('express')
const router = express.Router()

const users = [
    {id: 1, nama: "Azra", email: "azra@gmail.com" },
    {id: 2, nama: "Rizqia", email: "rizqia@gmail.com" },
]

router.get('/users', (req, res) => {
  res.json(users)
})

router.post('/users', (req, res) => {
  users.push(req.body)
  res.json(users)
})

router.put('/users/:id', (req, res) => {
  res.send('Got a update user')
})

router.delete('/users/:id', (req, res) => {
  res.send('Got a delete user')
})

module.exports = router