const express = require('express')
const server = express()
const port = 3000

server.get('/', (req, res) => {
  res.send("home route")
})

server.get('/about',(req, res) => {
  res.send('about page')
})

server.listen(port, () => {
  console.log("server start");
})


