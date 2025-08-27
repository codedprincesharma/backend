const express = require('express')
const authRoute = require('./routes/auth.route')
const cookiparser = require('cookie-parser')
const app = express()

app.use(express.json())
app.use(cookiparser())



app.use('auth', authRoute)


module.exports = app