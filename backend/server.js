require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT;
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: 200,
    msg: "Welcome to homepage homeboys",
  });
});

const gifController = require("./controllers/gif");
app.use("/gifs", gifController);

app.listen(PORT, () => {
  console.log(`We Rolling on Port ${PORT}`);
});
