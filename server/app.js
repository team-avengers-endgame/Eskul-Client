const express = require("express");
const app = express();
app.get("/", (_, res) => {
  res.send("<h2>Hello World!</h2>");
});
module.exports = app;
