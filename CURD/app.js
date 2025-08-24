const express = require('express');
const app = express();
const port = 3000;

app.use(express.json())



app.post('/notes', (req, res) => {
  console.log(req.body);


})

app.listen(port, () => {
  console.log("server start");

})