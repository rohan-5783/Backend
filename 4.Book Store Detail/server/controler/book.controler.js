const express=require("express");
const {UserModel} = require("../model/book.model");
const expressroute=express.Router();
expressroute.get("/books",async (req,res)=>{
    try {
        const data= await UserModel.find();
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})
expressroute.get("/books/:id",async (req,res)=>{
    const {id}=req.params
    try {
        const data= await UserModel.findById(id);
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})

expressroute.post("/books",async (req,res)=>{
    try {
        const data= await UserModel.create(req.body);
        res,send("ok")
    } catch (error) {
        console.log(error)
    }
})

expressroute.delete("/books/:id",async (req,res)=>{
    const {id}=req.params;
    try {
        const data= await UserModel.findByIdAndDelete(id);
        res.send("ok")
    } catch (error) {
        console.log(error)
    }
})

expressroute.patch("/books/:id",async (req,res)=>{
    const {id}=req.params
    const {Title,Author,Price,Description,ISBN,Image}=req.body
    try {
        const data= await UserModel.findByIdAndUpdate(id,{Title,Author,Price,Description,ISBN,Image});
        res.send("ok")
    } catch (error) {
        console.log(error)
    }
})




module.exports=expressroute;