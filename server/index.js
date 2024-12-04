const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

const bookRoutes = require('./src/books/book.route.js');
const connectToMongoDB = require('./db/connectToMongodb.js');


const port = process.env.PORT || 3000;

dotenv.config();

//middleware
app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true
}));

app.use(express.json());

// routes
app.use("/api/books", bookRoutes)

app.listen(port, ()=> {
  connectToMongoDB();
  console.log(`Example app listening on port ${port}`);
})