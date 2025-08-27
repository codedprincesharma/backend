const express = require('express')
const route = express.Router()

route.post('/register', (res, req) => {
  res.setEncoding("hello register route")

})



module.exports = route