const express = require("express");
const authRoute = require("./router/auth.route");
const cookiparser = require('cookie-parser')
const app = express()
//middleware
app.use(express.json())
app.use(cookiparser())

//app
app.use('/auth',authRoute)



module.exports = app

