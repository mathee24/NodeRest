 require("dotenv").config();

const exprees = require("express");
const app = exprees();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Example app listening a http://localhost:${port}`);
});
