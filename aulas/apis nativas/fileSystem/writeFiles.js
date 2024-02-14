const {writeFile} = require('fs');
//cria a pasta
writeFile('arquivo.txt',"criando arquivo com write file",(err)=>{
    if(err)
        throw err;
    console.log("arquivo criado");
});