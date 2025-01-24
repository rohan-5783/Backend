const mongoose=require("mongoose");
const connection=mongoose.connect("mongodb://127.0.0.1:27017/books");
const BookSchema=new mongoose.Schema({
    Title:String,
    ISBN:String,
    Price:Number,
    Author:String,
Description:String,
Image:String
})
const UserModel=mongoose.model("books",BookSchema);
module.exports={UserModel,connection};