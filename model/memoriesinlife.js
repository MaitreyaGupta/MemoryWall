const OurMemories=require("./OurMemories")
const getAllData=async  function(req,res){
   const memory=await OurMemories.find({})
   res.status(200).json({app_id:"658fc0979372a500e6ded68c",
   memory}) 
}
module.exports=getAllData;