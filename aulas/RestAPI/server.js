require('dotenv').config()
const express = require('express')
const app = express()

const {MongoClient} = require('mongodb')
const uri = process.env.DATABASE_STRING;
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect()
        console.log('conectado')
    } catch (error) {
        console.log(error)        
    }
}
run();

app.use(express.json())

const subscribersRouters = require('./routes/subscribers')
app.use('/subscribers',subscribersRouters)

app.listen(3000,()=>{
    console.log(`Server running in port 3000`)
})




