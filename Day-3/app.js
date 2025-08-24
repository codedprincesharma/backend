const express = require('express')
const app = express()

app.use(express.json())

const notes = []

app.get('/home', (req, res) => {
  res.send('Hello World!')
})
app.post('/about', (req, res) => {
  notes.push(req.body)
  res.json()
})

app.get('/about', (req, res) => {
  res.send(notes)
})

app.listen(3000, () => {
  console.log(`Server is running on ${3000}`)
})