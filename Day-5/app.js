const express = require('express')
const connectToDb = require('./src/db/ds')
connectToDb()
const app = express()
app.use(express.json())
const notes = []

app.get('/', (req, res) => {
  res.send('home')
})

app.post('/note', (req, res) => {
  const { title, content } = req.body
  console.log(title, content);
  res.json({
    message: "data posted"
  })
})

app.get('/note', (req, res) => {
  res.json(notes)
})

app.delete('/note/:id', (req, res) => {
  const index = req.params.id
  delete notes[index]
  res.json({
    message: "notes deleted"
  })
})


app.patch('/note/:id', (req, res) => {
  const index = req.params.id
  const { name } = req.body
  notes[index].name = name
  res.json({
    message: "notes update"
  })
})



app.listen(3000, () => {
  console.log('server running on port 3000');
})