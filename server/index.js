require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8001;
const cookieParser = require("cookie-parser")

const userRouter = require("./routes/user.route");
const movieRouter = require("./routes/movie.route");

app.use(express.json());
app.use(express.urlencoded({ urlencoded: true }));
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/api/auth", userRouter);
app.use("/api/movie", movieRouter);

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
