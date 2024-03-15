require("./databse"); // Correct the typo in your existing require statement
const express = require("express");
require("dotenv").config();
const postRoute = require("./router/post");
const getRoute = require("./router/get"); // Add the new route
const morgan = require("morgan");

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/post", postRoute);
app.use("/api/get", getRoute); // Use the new route for GET requests

const PORT = process.env.PORT;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(PORT, () => {
  console.log("Server is listening at http://localhost:" + PORT);
});
