const express=require("express");
const app =express();
const mongoose = require('mongoose');
const Product=require("./model/productModule.js")
app.use(express.json())
app.get("",(req,res)=>{
    res.send("<h1>hello i am anand </h1>")

})
app.post("/product",async(req,resp)=>{
    try{
        const product=await Product.create(req.body)
        resp.status(200).json(product)

    } catch(err){console.log(err.message);
        resp.status(500).json({message:err.message})

    }
})





mongoose.connect('mongodb+srv://jacklinuxnd:p4CeG4LxCP8Idak@cluster0.gkvajcw.mongodb.net/jacklinuxnd?retryWrites=true&w=majority').then(
    ()=>{app.listen(4000,()=>{
        console.log("port no 4000");
    })
        
        
        console.log("conected to db")}
).catch((err)=>{console.log(`somthing is =>...${err}`)})