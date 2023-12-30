const multer=require("multer")
const gridFS=require("multer-gridfs")

const storage=multer.diskStorage({ 
        destination:"Uploads",
        filename:function(req,file,cb)
        {
            cb(null,file.originalname)
        },
    }
)

const store1=multer({storage:storage})

module.exports=store1