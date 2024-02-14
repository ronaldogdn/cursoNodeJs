const fs = require('fs');
//leitura de forma async
fs.readFile('texto.txt',(err,data)=>{
    if(err)
    throw err;
console.log(data.toString());
});

//leitura de forma sync
const texto = fs.readFileSync("texto.txt");
console.log("text"+texto);