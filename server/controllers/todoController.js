const doModel=require("../model/todoModel")

const insertData=async(req,res)=>{
  const {title,dis}=req.body
  try {
    const data=  await doModel.create({
      title:title,
      discription:dis,
      status:false
    })
    res.status(200).json("Data Save in mongoDB!!")
  } catch (error) {
    console.error(error)
  }
}

const displayData=async(req,res)=>{
  try {
    await doModel.find().then((data)=>{
      res.status(201).json(data)
    })
  } catch (error) {
    console.error(error)
  }
}
const delData=async(req,res)=>{
  try {
    let id=req.body.myId;
       doModel.findByIdAndDelete(id).then((responce)=>{
        res.status(200).json("data successfully deleted !!")
       })
  } catch (error) {
    console.error(error)
  }
}
const statusData=async(req,res)=>{
  const id=req.body.Id;
  await doModel.findByIdAndUpdate(id,{status:true}).then((responc)=>{
    res.status(200).json("status change")
  })
}
module.exports={

  insertData,
  displayData,
  delData,
  statusData
}