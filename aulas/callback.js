function soma(x,callback) {
    return setTimeout(() => {
        return callback(null,x + 4500);
    }, 3000);
}
//callback function
function resolveSoma(err, resultado) {
    if(err)
        throw err;
    console.log(resultado);
}
soma(500,resolveSoma);