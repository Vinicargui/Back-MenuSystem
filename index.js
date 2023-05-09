const express = require('express')
const app = express()
const mongoose = require('mongoose')

//CONF PARA LER JSON
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())

//CRIANDO ROTA

app.get('/', (req, res)=>{
    res.json({message:"Olá mundo!"})
})
//PORTA DISPONIVEL
app.listen(3000)