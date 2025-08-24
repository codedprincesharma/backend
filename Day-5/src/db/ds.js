
const mongoose = require("mongoose")

function connectDb() {

  mongoose.connect("mongodb+srv://hitprinceraj:UBYzzRnqfvftAe6m@cluster1.zujhmbr.mongodb.net/firstdb").then(() => {
    console.log("connect to db");
  })
}

module.exports = connectDb