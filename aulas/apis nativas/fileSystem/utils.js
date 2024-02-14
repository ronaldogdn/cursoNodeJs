const {promisify} = require('util');

const writeFile = promisify(require('fs').writeFile);
const texto ="criando um arquivo com promisiFy";
writeFile('utilArquivo.txt',texto)
    .then(()=>{
        console.log("arquivo criado");
}).catch((err)=>{
    console.log(`Erro na criação do arquivo: ${err}`);
    
});