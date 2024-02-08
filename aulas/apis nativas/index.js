const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const url = `http://${hostname}:${port}`;
const server = http.createServer((request,respose)=>{
    respose.statusCode = 200;
    respose.setHeader('Content-Type','text/html');
    respose.end('<h1>Bem-vindo<br></h1>');
});
server.listen(port,hostname,()=>{
    console.log(`Servidor rodando em ${url}`)
})