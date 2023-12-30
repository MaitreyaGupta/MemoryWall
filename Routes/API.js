const memoryModel=require("../model/memoriesinlife")
const express=require("express")
const Router=express.Router()
 

Router.route("/").get(memoryModel)
 module.exports=Router