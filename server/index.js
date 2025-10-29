require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const app = express();
const PORT = process.env.PORT || 8001;

const userRouter = require("./routes/user.route");

app.use(express.json());
app.use(express.urlencoded({ urlencoded: true }));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/api/auth", userRouter);

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
