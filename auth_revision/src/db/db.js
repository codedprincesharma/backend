const mongoose = require('mongoose');
function connectDb() {
  try {
    mongoose.connect(process.env.MONGODB_URI)
    console.log("connect to data base")

  } catch (err) {
    console.log("error", err)
  }
}

module.exports = connectDb