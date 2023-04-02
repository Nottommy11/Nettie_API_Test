const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const postRoute = require('./routes/posts')


dotenv.config()

const questionDataFundies1 = require("./QuestionData/JSONData/fundamental questions - T1.json");
const questionDataFundies2 = require("./QuestionData/JSONData/fundamental questions - T2.json");
const questionDataMod1 = require("./QuestionData/JSONData/mod1-singleAnswer.json");
const questionDataMod2 = require("./QuestionData/JSONData/mod2-singleAnswer.json");
const loginData = require("./loginData/logins.json");
let port = process.env.PORT || 3005;

mongoose.connect(process.env.DBCONNECT)
const authRoute = require('./routes/auth')

//middleware
app.use(cors());
app.use(express.json())

//routes
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

//post route middleware, go here to post user
app.use('/api/user', authRoute) //everything in the authRoute will have this prefix
app.use('/api/posts', postRoute)

app.listen(3005, () => console.log('Server is up and running'))
