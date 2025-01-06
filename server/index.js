const express=require("express")
const app=express()
const mongoose= require("mongoose")
const cors=require("cors")
require("dotenv").config()

const router=require("./routes/router")
const database=process.env.DATABASE
mongoose.connect(database).then(()=>{
    console.log("mongodb is connected ...")
}).catch((err)=>{
    console.log("error while mongodb connection ",err)
})
const port=process.env.PORT||7000;
app.use(express.json())
app.use(cors())
app.use("/v1",router)



app.listen(port,()=>{
    console.log("server is running.. "+port)
})