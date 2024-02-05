function soma(x) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
             resolve(x + 4500);
        }, 3000);
    })
}

soma(500)
    .then(resolve =>{
        console.log(resolve)
    });