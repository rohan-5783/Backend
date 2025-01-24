const express=require("express");
const  expressroute  = require("./controler/book.controler");
const { connection, UserModel } = require("./model/book.model");
const cors=require("cors")

const app=express();
app.use(express.json());
app.use(cors());
app.use("/",expressroute);

app.listen(5000,()=>{
    try {
         connection
         console.log("conneted to db")
    } catch (error) {
        console.log(error)
    }
})