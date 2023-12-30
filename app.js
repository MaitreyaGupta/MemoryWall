const express=require("express")
app=express()
const mongoose=require("mongoose")
const memories=require("./model/OurMemories")
const bodyParser=require("body-parser")
const APIRoute=require("./Routes/API")
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine","ejs")
const passport=require("passport")
const db=require("./config/mongoose")
const memoryModel = require("./model/OurMemories")
const hostedAPIUrl="/dummyapi.io/data/v1/API"
const Grid=require("GridFS")
const multer=require("multer")
const upload=require("./multer/multer")

app.use(express.static("Uploads"))

app.use(hostedAPIUrl,APIRoute)

app.use(express.static("public"))

app.use(express.json())

app.listen(3000,function(req,res){
    console.log("This is the operation")
})

app.get("/",function(req,res){
    res.render("Home")
})





app.post("/",upload.single("imageOption"),async function(req,res){
    console.log(req.file.filename)
    const memory1=new memories({
        time:req.body.memText,
        image:req.file.filename
    })
    memory1.save().then(console.log("Done Succesfully"))
     res.redirect("MemoryWall")
     console.log("Post function called")
})
app.get("/MemoryWall",async function(req,res){
    const memory1=await memories.find({})
    res.render("MemoryWall",{
        image:req.body.image,
        time:req.body.time,
        Memories:memory1})
})

 

 