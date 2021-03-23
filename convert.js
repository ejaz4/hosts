const fs = require("fs");

const convert = (contents) =>
  contents
    .split("\n")
    .filter((str) => str.includes("0.0.0.0") || str.includes("127.0.0.1"))
    .map((str) => str.split(" ")[1] || "")
    .filter((str) => str !== "")
    .filter((str) => str !== "0.0.0.0")
    .filter((str) => !str.includes("localhost"))
    .map((str) => str.replace(/(\r\n|\n|\r)/gm, "")) // DIE WINDOWS LINE ENDS!!!!!!!!!!!!!!!!!!!!!!!!!!
    .map((str) => `||${str}^`);

const ipLogger = fs.readFileSync("./IP loggers.txt").toString();
fs.writeFileSync("./IP logger.abp.txt", convert(ipLogger).join("\n"));
