const express = require("express");
const app = express();
app.get("/", (_, res) => {
  res.send("<h3>Hello World!</h3>");
});
module.exports = app;
