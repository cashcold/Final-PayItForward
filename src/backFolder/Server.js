const express = require('express')
const cors = require('cors')
const dotEnv = require('dotenv')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const userRouter = require('./Router/userRouter')

dotEnv.config()


mongoose.connect(process.env.DataBaseConnecting,{ useNewUrlParser: true },()=>{
    console.log('DataBase Connented Successful')
})
const PortNumber = process.env.PortNumber || 8000

const JungleServer = express()

JungleServer.use(cors())
JungleServer.use(bodyParser.json())

JungleServer.use('/users',userRouter)


JungleServer.listen(PortNumber,()=>{
    console.log(`server is runing on local Port Number ${PortNumber}`)
})