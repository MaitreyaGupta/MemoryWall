require("dotenv").config()
const { model } = require("mongoose")
const modelMemories=require("./model/OurMemories")
const db=require("./config/mongoose")
const Product=require("./Product.json")
const Mongoose_Connection_Url="https://localhost:27017/Starter.db"
 modelMemories.create(Product)