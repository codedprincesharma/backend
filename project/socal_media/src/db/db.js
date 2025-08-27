const mongoose = require('mongoose')

async function connectDb() {
  try {
   await mongoose.connect(process.env.MONGO_URI)
    console.log("connect db")
  } catch (error) {
    console.log("error", error)
  }
}

module.exports = connectDb