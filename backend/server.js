require("dotenv").config(); // Load environment variables

const app = require('./src/app'); // Express app
const connectDB = require('./src/db/db'); // MongoDB connection function

connectDB(); // Connect to MongoDB

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
