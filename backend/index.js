const express = require("express");
const { connection } = require("./config.js/db");
const { authRouter } = require("./routes/auth");
const { userRouter } = require("./routes/user");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);
app.get("/", (req, res) => {
  res.send("welcome to Homepage");
});

app.use("/static", express.static("./uploads"));

app.use("/auth", authRouter);
app.use("/profile", userRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("connected to DB Successfully");
  } catch (err) {
    console.log(err);
    console.log("err connected to DB");
  }
  console.log("port started at http://localhost:8000");
});
