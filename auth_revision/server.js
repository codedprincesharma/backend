require('dotenv').config()
const app = require('./src/app')
const connectDb = require('./src/db/db')
PORT= process.env.PORT || 3000
connectDb()








app.listen(PORT,(req,res)=>{
  console.log(`server running on ${PORT}` )
})