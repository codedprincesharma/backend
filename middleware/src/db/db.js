const mongoose = require('mongoose')


async function connectDb() {
  try {
   await mongoose.connect('mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority')
   console.log('connect to db')
  } catch (error) {
    console.error("error" , error.message)
  }  
}

module.exports = connectDb