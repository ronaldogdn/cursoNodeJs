//file system do node
const fs = require("fs");
console.log((process.hrtime()[0]/60).toFixed(5));
console.log("antes da leitura do arquivo");
//sync => é bloqueante
const dados = fs.readFileSync("file.txt");
console.log("executando o console após o arquivo");
console.log((process.hrtime()[0]/60).toFixed(5));