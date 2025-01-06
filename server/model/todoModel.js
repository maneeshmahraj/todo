
const mongoose=require("mongoose")

const todoSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        required:true
    },
    status:Boolean
})
module.exports=mongoose.model("list",todoSchema)