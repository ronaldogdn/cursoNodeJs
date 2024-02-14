const fs = require('fs');
//cria a pasta
fs.mkdir('projeto',{recursive: true},(err)=>{
//fs.mkdir('projeto/subpasta/subpasta',{recursive: true},(err)=>{
    if(err)
        throw err;
    console.log("diretório criado");
});
//criação de subpastas
const assets = ['css','js','images'];
function make(dir) {
    dir.forEach(item => {
        fs.mkdir(`projeto/assets/${item}`,{recursive: true},(err)=>{
                if(err)
                    throw err;
                console.log("diretório criado");
            });     
    });
}
make(assets);