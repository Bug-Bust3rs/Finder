const express = require('express');


const app = express();

app.get('/',(req,res)=>{
    res.status(200).json({ status : true })
})

app.listen(6969,()=>{
    console.log("Port Started at 6969");
})