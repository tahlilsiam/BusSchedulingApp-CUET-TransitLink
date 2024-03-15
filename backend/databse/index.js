const mongoose = require("mongoose");
require("dotenv").config(); // If you haven't already required dotenv

// Load MongoDB URI from environment variables
const mongoURI = process.env.MONGO_URI;

// Connect to MongoDB Atlas
mongoose.connect(mongoURI);

// Check connection status
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB!");
});
