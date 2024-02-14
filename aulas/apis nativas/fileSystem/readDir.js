const fs = require('fs');
/**
 * lê o arquivo de forma Async
 * __dirname: pega o nome do diretório
 */
fs.readdir(__dirname,(err,data)=>{
    data.forEach((files)=>{
        console.log(__dirname+'\\'+files);
    })
});
fs.readdir("../",(err,data)=>{
    data.forEach((files)=>{
        console.log(__dirname+files);
    })
});