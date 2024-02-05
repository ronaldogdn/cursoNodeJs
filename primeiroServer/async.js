function soma(x) {
    return new Promise((resolve,reject)=>{
        if(Number(x) == NaN ||
           Number(x) == undefined ||
           typeof x != 'number')
        {
            reject("Insira um número");
        }
        
        setTimeout(() => {
             resolve(x + 4500);
        }, 3000);
    })
}
async function principal() {
    try {
        const resultado = await soma(500);
        console.log(resultado);
    } catch (error) {
        console.log(`ERRO: ${error}`);
    }
}
principal();