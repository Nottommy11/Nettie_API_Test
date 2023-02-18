const express = require("express");
const app = express();
const cors = require("cors");
const questionDataMod1 = require("./QuestionData/JSONData/mod1-singleAnswer.json");
const loginData = require("./loginData/logins.json");
let port = process.env.PORT || 3005;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/questionData/Mod1", (req, res) => {
  res.status(200).send(questionDataMod1);
});

app.get("/loginData", (req, res) => {
  res.status(200).send(loginData);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
