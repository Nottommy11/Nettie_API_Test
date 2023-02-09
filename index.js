const express = require("express");
const app = express();
const questionDataL1M1 = require("./questionData/L1M1.json");
const loginData = require("./loginData/logins.json");
let port = process.env.PORT || 3005;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/questionData/L1/M1", (req, res) => {
  res.send(questionDataL1M1);
});

app.get("/loginData", (req, res) => {
  res.send(loginData);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
