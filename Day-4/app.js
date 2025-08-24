const express = require('express')
const { MongoClient, ObjectId } = require('mongodb')
const app = express()
const user = []
app.use(express.json())


const uri = 'mongodb://127.0.0.1:27017' // or use your MongoDB Atlas URI
const client = new MongoClient(uri)
let collection

async function connectToDB() {
  await client.connect()
  const db = client.db('myDatabase')
  collection = db.collection('users')
}

connectToDB().then(() => {
  console.log('Connected to MongoDB')
}).catch(console.error)


app.get('/', (req, res) => {
  res.send('Home')
})


app.get('/v1', (req, res) => {
  res.json(user)
})

app.post('/v1', (req, res) => {
  user.push(req.body)

  res.json({
    message: "create v1"
  })
})

app.delete('/v1/:id', (req, res) => {
  const index = req.params.id
  delete user[index]
  res.json({
    message: "deleted v1"
  })
})

app.patch('/v1/:id', (req, res) => {
  const index = req.params.id
  const { name } = req.body
  user[index].name = name
  res.json({
    message: "updated v1"
  })
})







app.listen(3000, () => {
  console.log('server are running on loacalhost 3000');

})