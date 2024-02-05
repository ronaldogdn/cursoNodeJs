//file system do node
const fs = require("fs");
console.log((process.hrtime()[0]/60).toFixed(5));
console.log("antes da leitura do arquivo");
//non bloqueante
const dados = fs.readFile("file.txt",(err,data)=>{
    if(err){
        throw err;
    }
    console.log("terminei a leitura do txt");
});
console.log("executando o console após o arquivo");
console.log((process.hrtime()[0]/60).toFixed(5));