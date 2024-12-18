const express = require("express")
const app = express()
const mongoose =require("mongoose")



app.use(express.json())
app.use("/api",require("./router/product.router"))
mongoose.connect("mongodb+srv://naftiwala10:naftiwala10@cluster0.zkzjn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>console.log("database connected"))





app.listen(5018, ()=> console.log("Server is Activated on 5018") )