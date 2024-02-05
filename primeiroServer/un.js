const fs = require("fs");
/**
 * esse método dá problema porque readFile é não bloqueante e
 * unlink é bloqueante
 */
// fs.readFile("file.txt",(err,data) => {
//     if(err){
//         throw err;
//     }
//     console.log(data);
// });
//fs.unlinkSync("file.txt");
/////////////////////////////////////
/**
 * Correção
 */
fs.readFile("file.txt",(err,data) => {
    if(err){
        throw err;
    }
    console.log(data);
    //unlink apaga o arquivo
    fs.unlink("file.txt",(unlinkErr) => {
        if(unlinkErr){
            throw unlinkErr;
        }
        console.log("Arquivo excluído.");
    });
});