const fs=require("fs")
const express=require("express");

const app=express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

app.get("/",(req,res)=>{
fs.readFile("./db.json","utf-8",(err,data)=>{
 if(err){
    console.log(err)
 }
 else{
    res.send(data)
 }
})
})




app.post("/addproduct",(req,res)=>{
    console.log(req.body);

    fs.readFile("./db.json",(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            const products=JSON.parse(data);
            products.push(req.body);
            fs.writeFile("./db.json", JSON.stringify(products), (err) => {
                if (err) {
                    console.log("Error writing file:", err);
                } else {
                    res.send("Product added successfully");
                }
            });
        }
    })
})


app.delete("/deleteproduct/:id",(req,res)=>{
   const{id}=req.params;

    fs.readFile("./db.json","utf-8",(err,data)=>{
        if(err){
            console.log(err)
        res.send("hello")        }
        else{

            const dataproduct=JSON.parse(data)
            const dataupdates=dataproduct.filter((el)=>el.id!=id)
            fs.writeFile("./db.json",JSON.stringify(dataupdates),(err)=>{
                if(err){
                    console.log(err)
                }
                else{
                  res.send("Data Deleted")
                }
            })
        }
    })
})



app.put("/Updateproduct/:id", (req, res) => {
    const { id } = req.params;
    fs.readFile("./db.json", "utf-8", (err, data) => {
        if (err) {
            console.log(err);
        } else {
            const newdata = JSON.parse(data);
            const indexofproduct =newdata.findIndex((el)=>el.id==id);
            if (indexofproduct != -1) {
                newdata[indexofproduct] = { ...newdata[indexofproduct], ...req.body };
                fs.writeFile("./db.json", JSON.stringify(newdata), (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        res.send("Data updated");
                    }
                });
            } else {
                res.end("product not found")
            }
        }
    });
});

app.listen(3000,()=>{
    console.log("http://localhost:3000")
})


