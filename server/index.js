require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const app = express();
const PORT = process.env.PORT || 8001;
app.get("/", (req, res) => {
  res.send("hello world");
});

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
