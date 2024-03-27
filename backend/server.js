const express = require('express');
const app = require("./app");
const { connectDB } = require("./config/db");
const path = require('path');

connectDB();

app.use(express.static(path.join(__dirname,"../frontend/build")));

// all file or any route serve one file which is index.html
app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../frontend/build/index.html"))
})

app.listen(process.env.PORT,()=>{
   console.log(`Server is running on port ${process.env.PORT}`); 
})
