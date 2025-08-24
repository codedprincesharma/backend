const express = require('express')
const authRoute = express.Router()
const userModal = require('../models/user.model')
const jwt = require('jsonwebtoken')

//register
authRoute.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await userModal.create({
      username, password
    })
    const token = jwt.sign({
      id: user._id,
    }, process.env.JWT_SECRET)

    res.status(201).json({
      message: "user registerd",
      user,
      token
    })
  } catch (error) {
    res.status(500).json({ message: "server error", error })
  }
})

//Login
authRoute.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body
    const isUserExist = await userModal.findOne({
      username: username
    })
    if (!isUserExist) {
      return res.status(401).json({
        message: "user account not found [invalid username]"
      })
    }
    const isPasswardValid = password == isUserExist.password
    if (!isPasswardValid) {
      res.status(401).json({
        message: "password invalid"
      })
    }
    res.status(201).json({
      message: "user login"
    })
  } catch (error) {
    res.status(500).json({
      message: "server error", error
    })
  }
})

//user

authRoute.get('/user', async (req, res) => {
  try {
    const { token } = req.body

    if (!token) {
      return res.status(401).json({
        message: "unauthorized"
      })
    }
  } catch (error) {
    res.status(500).json({
      message: "server error",
      error
    })
  }


})

module.exports = authRoute