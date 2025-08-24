const express = require('express')
const server = express()
server.use(express.json())



const user = []

server.get('/', (req, res) => {
  res.send('hello')
})


server.get('/user/:index', (req, res) => {
  const index = parseInt(req.params.index)
  if (user[index]) {
    res.json(user[index])
  } else {
    res.status(404).json({ message: "User not found" })
  }
})

//post meathod
server.post('/user', (req, res) => {
  user.push(req.body)
  res.json({
    message: "user created"
  })

})

//delete method
server.delete('/user/:index', (req, res) => {
  const index = req.params.index
  delete user[index]
  res.json({
    message: "notes deleted succesfully"
  })
})






server.listen(3000, () => {
  console.log('server running on localhost 3000');

})