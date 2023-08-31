const express = require('express')
const app = express()

const server = require('http').createServer(app)

const port = '3000'

app.get('/',(res,res)=>{
    res.sendFile(__dirname+'/public/viwindex.html')
})


server.listen(port,() =>{
    console.log('servidor rodando na porta 3000')
})