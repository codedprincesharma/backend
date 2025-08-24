const express = require('express')
const authRoute = express.Router()
const userModal = require('../models/user.model')
const jwt = require('jsonwebtoken')

//register
authRoute.post('/register', async (req, res) => {
  const { username, passward } = req.body

  const user = await userModal.create({
    username, passward
  })

  const token = jwt.sign({
    id: user._id,

  }, process.env.JWT_SECRET)


  res.status(201).json({
    message: "user registerd",
    user,
    token
  })
})

//login
authRoute.post('/login', async (req, res) => {
  const { username, passward } = req.body
  const isUserExist = await userModal.findOne({
    username: username
  })

  if (!isUserExist) {
    return res.status(401).json({
      message: "user account not found [invalid username]"
    })
  }

  const isPasswardValid = passward == isUserExist.passward
  if (!isPasswardValid) {
    res.status(401).json({
      message: "passward invalid"
    })
  }
  res.status(201).json({
    message: "user login"
  })
})

module.exports = authRoute