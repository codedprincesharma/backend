const express = require('express')
const route = express.Router()

route.use((req, res, next) => {
  console.log('this middleware is b/w router and api')
  next()
})
route.get('/', (req, res) => {
  res.send({
    message: "create api"
  })
})
module.exports = route