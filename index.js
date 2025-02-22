const express = require('express');
const app = express();
require("dotenv").config();


// Middleware
app.use(express.json());

const blog = require('./routes/blog');

// Mount routes
app.use('/api/v1', blog);

// DB connection
const connectWithDB = require('./config/database');
connectWithDB();
const PORT = process.env.PORT ;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send(`<h1>Hello World</h1>`);
});
