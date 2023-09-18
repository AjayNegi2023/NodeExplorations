const express = require('express')
const fs = require('fs');
const users = require("./MOCK_DATA.json");
const app = express();
const PORT = 8000;

app.use(express.urlencoded({extended:false})); //MiddleWare

app.get("/users", (req, res) => {
    const html = `
    <ul>
       ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
    </ul>
    `
    res.send(html);
})

app.get("/api/users", (req, res) => {
   
    return res.json(users)
})

app.get("/api/users/:id",(req,res)=>{
    // console.log(req.params);
    const id = Number(req.params.id); 
    const user = users.find((user)=> user.id===id);
    return res.json(user);
})

app.post("/api/users",(req,res)=>{
    const data= req.body;
    // console.log(data);
    // console.log("Length of Users is : "+users.length)
    //Create new USer
    users.push({...data,id:users.length+1});
    
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
        return res.json({status:"success" , message:`New user Create 1`,id:users.length+1})
    })
})

app.patch("/api/users/:id",(req,res)=>{
    //Edit user with id
    return res.json({status:"Pending"})
})
app.delete("/api/users/:id",(req,res)=>{
    //Delete user with id 
    return res.json({status:"Pending"})
})



app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})