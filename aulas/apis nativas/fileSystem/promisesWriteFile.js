const {writeFile} = require('fs');

function criaArquivo(name,content) {
    return new Promise((resolve,reject)=>{
        writeFile(name,content,err =>{
            if(err)
                return reject(err);
            resolve();
        })
    })
}
criaArquivo('promiseArquivo.txt','Criando o arquivo utilizando promise')
    .then(()=>console.log('Arquivo criado'))
    .catch(err => console.log(err));