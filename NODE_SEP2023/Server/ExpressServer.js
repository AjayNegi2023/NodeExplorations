const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    return res.send("Home page !");
})

app.get('/about',(req,res)=>{
    return res.send(`Hello ${req.query.Name}`)//Handling query Parameter
});

app.listen(8001,()=>{
    console.log("Server is running on PORT 8001");
})