const express = require("express");
const app = express();
const cors = require("cors");

const questionDataFundies1 = require("./QuestionData/JSONData/fundamental questions - T1.json");
const questionDataFundies2 = require("./QuestionData/JSONData/fundamental questions - T2.json");
const questionDataMod1 = require("./QuestionData/JSONData/mod1-singleAnswer.json");
const questionDataMod2 = require("./QuestionData/JSONData/mod2-singleAnswer.json");
const loginData = require("./loginData/logins.json");
let port = process.env.PORT || 3005;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/questionData/Fundies1", (req, res) => {
  res.status(200).send(questionDataFundies1);
});

app.get("/questionData/Fundies2", (req, res) => {
  res.status(200).send(questionDataFundies2);
});

app.get("/questionData/Module1", (req, res) => {
  res.status(200).send(questionDataMod1);
});

app.get("/questionData/Module2", (req, res) => {
  res.status(200).send(questionDataMod2);
});

app.get("/loginData", (req, res) => {
  res.status(200).send(loginData);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
