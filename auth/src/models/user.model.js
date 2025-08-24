const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: String,
  passward: String
})


const userModal = mongoose.model('user', userSchema)
module.exports = userModal