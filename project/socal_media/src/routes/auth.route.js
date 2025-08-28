const express = require('express')
const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')
const route = express.Router()

//register Route
route.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body
    const isExist = await userModel.findOne({
      username
    })
    if (isExist) {
      return res.status(409).json({
        message: "user is already exist"
      })
    }
    const newUser = await userModel.create({
      username, password
    })
    const token = jwt.sign({
      id:newUser._id
    },process.env.JWT_SECRET)

    res.cookie('token',token)

    res.status(201).json({
      message: "userid created",
      newUser,
    })
  } catch (error) {
    res.status(500).json({
      message: "erroe",
      error
    })
  }
})

//login
route.post('/login', async (req, res) => {






})



module.exports = route