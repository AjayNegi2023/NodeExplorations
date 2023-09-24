const fs = require('fs');



//Built-In MiddleWare

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

// app.use((req, res, next) => {
//     console.log("MiddleWare 1 ");

//     req.Name = "Ajay"; //changes to the request
//     next(); // to call next middleWare 

// })
// app.use((req, res, next) => {
//     console.log("MiddleWare 2 ");
//     console.log("Name from MiddleWare 1 is : " + req.Name);
//     next(); // to call next middleWare 

// })



const logReqRes = (filename) => {
    return (req, res, next) => {
        let date = new Date();
        // console.log("MiddleWare 3")
        fs.appendFile("log.txt", `\n ${date}  ${req.method}  ${req.path}`, (error, data) => {
            next();
        })
    }
}

module.exports = {
    logReqRes
}