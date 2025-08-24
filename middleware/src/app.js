const express = require('express')
const indexRoute = require('./route/index.route')
const app = express()
app.use(express.json())

app.use((req,res,next)=>{
  console.log('this middleware is b/w app and router ');
  next()
})

app.use('/',indexRoute)


module.exports = app