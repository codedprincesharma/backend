const mongoose = require('mongoose')


async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log('connect to database')
  } catch (error) {
    console.log('error', error)
  }
}


module.exports = connectDb