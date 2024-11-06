import express , {Application} from "express"

import * as dotenv from "dotenv"
dotenv.config()

import './database/connection'
const app:Application=express()
const port:number = 4000


app.listen (port,()=>{
    console.log("Running in port",port)
})