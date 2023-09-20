const express = require('express')
const fs = require('fs');
const users = require("./MOCK_DATA.json");
const app = express();
const PORT = 8000;

app.use(express.urlencoded({
    extended: false
})); //Built-In MiddleWare

//**************************************MiddleWare*******************************************
// Middleware functions are functions that have access to the request object (req), 
// the response object (res), and the next function in the application’s request-response 
// cycle.The next function is a function in the Express router which, when invoked, executes
//  the middleware succeeding the current middleware.

// Middleware functions can perform the following tasks:

// Execute any code.
// Make changes to the request and the response objects.
// End the request-response cycle.
// Call the next middleware in the stack.


app.use((req, res, next) => {
    console.log("MiddleWare 1 ");

    req.Name = "Ajay"; //changes to the request
    next(); // to call next middleWare 

})
app.use((req, res, next) => {
    console.log("MiddleWare 2 ");
    console.log("Name from MiddleWare 1 is : " + req.Name);
    next(); // to call next middleWare 

})

app.use((req, res, next) => {
    let date = new Date();
    console.log("MiddleWare 3")
    fs.appendFile("log.txt", `\n ${date}  ${req.method}  ${req.path}`, (error, data) => {
        next();
    })
})
app.get("/users", (req, res) => {
    //HTTP HEADERS
    //     The REST headers and parameters contain a wealth of information that can help you track down 
    //     issues when you encounter them. HTTP Headers are an important part of the API request and 
    //     response as they represent the meta-data associated with the API request and response. 
    //     Headers carry information for:
    //          Request and Response Body
    //          Request Authorization
    //          Response Caching 
    //          Response Cookies

    //Custom Header 

    //Response Header
    // res.setHeader("MyName","Ajay Negi");
    res.setHeader("X-MyName", "Ajay Negi"); //  Always add X to custom Headers for good practice 

    //Request Header
    console.log(req.headers);
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

app.get("/api/users/:id", (req, res) => {
    // console.log(req.params);
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if (!user) {
        return res.status(404).json({
            message: "User Not found !"
        })
    }
    return res.json(user);
})

app.post("/api/users", (req, res) => {
    //**************************************HTTP response status codes**************************************** */

    // HTTP response status codes indicate whether a specific HTTP request has been successfully completed. 
    // Responses are grouped in five classes:

    // Informational responses (100 – 199)
    // Successful responses (200 – 299)
    // Redirection messages (300 – 399)
    // Client error responses (400 – 499)
    // Server error responses (500 – 599)
    const data = req.body;
    if (!data || !data.first_name || !data.last_name || !data.gender || !data.Job_title) {
        return res.status(400).json({
            message: "All Fields are required ! "
        }); //400 -> Bad Request 
    }
    // console.log(data);
    // console.log("Length of Users is : "+users.length)
    //Create new USer
    users.push({
        ...data,
        id: users.length + 1
    });

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        //201 -> Created
        return res.status(201).json({
            status: "success",
            message: `New user Create 1`,
            id: users.length + 1
        })
    })
})

app.patch("/api/users/:id", (req, res) => {
    //Edit user with id
    return res.json({
        status: "Pending"
    })
})
app.delete("/api/users/:id", (req, res) => {
    //Delete user with id 
    return res.json({
        status: "Pending"
    })
})



app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})