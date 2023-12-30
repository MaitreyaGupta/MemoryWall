const { ObjectId } = require("mongodb")
const mongoose=require("mongoose")
const { buffer } = require("stream/consumers")

const memorySchema=new mongoose.Schema({
 image:
 [
   type=String,
   contentType=String
 ]
 ,
 time:[
   type=String,
   require=true,
 ]
})

const memoryModel=new mongoose.model("memoryModel",memorySchema)
module.exports=memoryModel