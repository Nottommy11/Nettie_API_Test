const XLSX = require("xlsx");
const fs = require("fs");

const ExcelData = "./Excel Data";
const CSVData = "./CSV Data";

// Make an async function that gets executed immediately
(async () => {
  // Our starting point
  try {
    // Get the files as an array
    const files = await fs.promises.readdir(ExcelData);

    // Loop them all with the new for...of
    for (const file of files) {
      const wb = XLSX.readFile(`${ExcelData}/${file}`);

      wb.SheetNames.forEach((n, i) => {
        console.log(`Sheet #${i + 1}: ${n}`);
        const ws = wb.Sheets[n];
        //console.log(XLSX.utils.sheet_to_csv(ws));
        fs.writeFileSync(`${CSVData}/${n}.csv`, XLSX.utils.sheet_to_csv(ws));
      });
    } // End for...of
  } catch (e) {
    // Catch anything bad that happens
    console.error("We've thrown! Whoops!", e);
  }
})(); // Wrap in parenthesis and call now
