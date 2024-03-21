const express = require('express');
const app = express();
const index = require('./routes/index.js')
const cookieParser = require('cookie-parser')

app.use(express.static('public'))

app.use(express.json());
app.use(cookieParser())

app.use((req,res,next) =>{
  console.log(`executando em middleware em nível de aplicação`)
  return next()
})

app.get('/setcookie', (req,res) =>{
  res.cookie('user','Ronaldo Gomes',{maxAge: 900000, httpOnly: true})
  return res.send('cookie gravado')
})
app.get('/getcookie', (req,res) =>{
  let user = req.cookies['user']
  if(user){
    res.send(user)
  }
})

app.get('/',(req,resp)=>{
  resp.statusCode =200
  resp.send('Hello world')
})

app.get('*',(req,res,next)=>{
  setImmediate(()=>{
    next(new Error(`temos um problema`))
  })
})
app.use((err, req,resp,next)=>{
  console.log(err.stack)
  resp.status(500).json({
    message: err.message
  })
})

app.use('/index',index)
app.listen(3000,()=>{
  console.log(`Server running`)
})