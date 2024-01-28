require("./databse");
const express = require("express");
require("dotenv").config();
const route = require("./router/post");
const morgan = require("morgan");

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/post", route);

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log("Server is listening at http://localhost:" + PORT);
});
