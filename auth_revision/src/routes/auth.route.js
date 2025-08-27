const express = require('express')
const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')
const authRoute = express.Router()

//register
authRoute.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body
    const isUserExist = await userModel.findOne({
      username
    })
    if (isUserExist) {
      return res.status(409).json({
        message: "usernane is already exitst"
      })
    }
    const user = await userModel.create({
      username, password
    })

    const token = jwt.sign({
      id: user._id,
    }, process.env.JWT_SECRET)
    res.cookies("token", token)

    res.status(201).json({ message: "user registered", user })
  } catch (error) {
    console.log("error", error)
  }

})

module.exports = authRoute