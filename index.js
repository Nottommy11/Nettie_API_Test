const express = require("express");
const app = express();
const importData = require("./questionData/L1M1.json");
let port = process.env.port || 3005;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/apiData", (req, res) => {
  res.send(importData);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
