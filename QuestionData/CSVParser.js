const fs = require("fs");
const Papa = require("papaparse");

const CSVData = "./QuestionData/CSVData";
const JSONData = "./QuestionData/JSONData";

// Make an async function that gets executed immediately
(async () => {
  // Our starting point
  try {
    // Get the files as an array
    const files = await fs.promises.readdir(CSVData);

    // Loop them all with the new for...of
    for (const file of files) {
      const fileName = file.split(".")[0];

      let parsedData = await readCSV(`${CSVData}/${file}`);
      saveToJson(parsedData, fileName);
    } // End for...of
  } catch (e) {
    // Catch anything bad that happens
    console.error("We've thrown! Whoops!", e);
  }
})(); // Wrap in parenthesis and call now

// Function to read csv which returns a promise so you can do async / await.
const readCSV = async (filePath) => {
  const csvFile = fs.readFileSync(filePath);
  const csvData = csvFile.toString();
  return new Promise((resolve) => {
    Papa.parse(csvData, {
      header: true,
      complete: (results) => {
        console.log("Complete", results.data.length, "records.");
        resolve(results.data);
      },
    });
  });
};

const saveToJson = async (data, fileName) => {
  const newData = [];

  data.forEach((element) => {
    const answers = [];
    element.Answer1 == null || element.Answer1 === ""
      ? ""
      : answers.push(element.Answer1);
    element.Answer2 == null || element.Answer2 === ""
      ? ""
      : answers.push(element.Answer2);
    element.Answer3 == null || element.Answer3 === ""
      ? ""
      : answers.push(element.Answer3);
    element.Answer4 == null || element.Answer4 === ""
      ? ""
      : answers.push(element.Answer4);
    element.Answer5 == null || element.Answer5 === ""
      ? ""
      : answers.push(element.Answer5);

    const writeIns = [];
    element.WriteIn1 == null || element.WriteIn1 === ""
      ? ""
      : writeIns.push(element.WriteIn1);
    element.WriteIn2 == null || element.WriteIn2 === ""
      ? ""
      : writeIns.push(element.WriteIn2);
    element.WriteIn3 == null || element.WriteIn3 === ""
      ? ""
      : writeIns.push(element.WriteIn3);
    element.WriteIn4 == null || element.WriteIn4 === ""
      ? ""
      : writeIns.push(element.WriteIn4);
    element.WriteIn5 == null || element.WriteIn5 === ""
      ? ""
      : writeIns.push(element.WriteIn5);

    const incorrectAnswers = [];
    element.IncorrectAnswer1 == null || element.IncorrectAnswer1 === ""
      ? ""
      : incorrectAnswers.push(element.IncorrectAnswer1);
    element.IncorrectAnswer2 == null || element.IncorrectAnswer2 === ""
      ? ""
      : incorrectAnswers.push(element.IncorrectAnswer2);
    element.IncorrectAnswer3 == null || element.IncorrectAnswer3 === ""
      ? ""
      : incorrectAnswers.push(element.IncorrectAnswer3);
    element.IncorrectAnswer4 == null || element.IncorrectAnswer4 === ""
      ? ""
      : incorrectAnswers.push(element.IncorrectAnswer4);
    element.IncorrectAnswer5 == null || element.IncorrectAnswer5 === ""
      ? ""
      : incorrectAnswers.push(element.IncorrectAnswer5);
    element.IncorrectAnswer6 == null || element.IncorrectAnswer6 === ""
      ? ""
      : incorrectAnswers.push(element.IncorrectAnswer6);
    element.IncorrectAnswer7 == null || element.IncorrectAnswer7 === ""
      ? ""
      : incorrectAnswers.push(element.IncorrectAnswer7);
    element.IncorrectAnswer8 == null || element.IncorrectAnswer8 === ""
      ? ""
      : incorrectAnswers.push(element.IncorrectAnswer8);
    element.IncorrectAnswer9 == null || element.IncorrectAnswer9 === ""
      ? ""
      : incorrectAnswers.push(element.IncorrectAnswer9);
    element.IncorrectAnswer10 == null || element.IncorrectAnswer10 === ""
      ? ""
      : incorrectAnswers.push(element.IncorrectAnswer10);

    newData.push({
      question: element.Question,
      answers: answers,
      writeIns: writeIns,
      incorrectAnswers: incorrectAnswers,
      questionType: element.QuestionType,
    });
  });

  fs.writeFileSync(`${JSONData}/${fileName}.json`, JSON.stringify(newData));
};
