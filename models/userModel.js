const mongoose = require('mongoose');

// Define the news schema
const newsSchema = new mongoose.Schema({
  url: String,
  img: String,
  title: String,
  type: String,
  time: String
});

// Define the schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  news: [newsSchema] // Array of news schema objects
});

// Create and Export a model using the schema
module.exports = mongoose.model('User', userSchema);