const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const mongoURI = process.env.MONGO_URI;
const app = express();
app.use(cors());
app.use(express.json());

// Connect to the MongoDB database
const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB Bro:', error.message);
  }
};
connectToMongo()

// Set up routes
const userRoutes = require('./routes/userRoutes');
const articleRoutes = require('./routes/articleRoutes');
app.use('/api/users', userRoutes);
app.use('/api/articles', articleRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
