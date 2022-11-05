const express = require('express');

const app =express();
const port=3000;
const routes=require('./routes/routes')

app.use(express.urlencoded({ extended: true })) // Aceita requisições do tipo url-encoded, ou seja, requisições de formulários e etc.
app.use(express.json()) // Aceita JSON como requisição (importante para APIs)
app.use('/',routes)

app.listen(port,()=>{
console.log('Servidor Iniciado com sucesso na porta:',port)
})