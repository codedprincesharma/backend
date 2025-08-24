const express = require("express");
const authRoute = require("./router/auth.route");
const app = express()
app.use(express.json())

app.use('/auth',authRoute)



module.exports = app

