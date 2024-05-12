const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const newsRoutes = require("./routes/newsRoute");
const userRoutes = require("./routes/userRoute");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/news", newsRoutes);
app.use("/api/user", userRoutes);

// ENV Data
require("dotenv").config();
const database = process.env.DATABASE
const PORT = process.env.PORT || 3000;

mongoose
  .connect(
    database
  )
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => {
      console.log("Listening on port : ",PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
