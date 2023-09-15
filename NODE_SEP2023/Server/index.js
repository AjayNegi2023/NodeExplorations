// import the http module using require() function. The http module is a core module of Node.js, 
// so no need to install it using NPM. The next step is to call createServer() method of http and 
// specify callback function with request and response parameter. Finally, call listen() method of 
// server object which was returned from createServer() method with port number, 
// to start listening to incoming requests on port 8000.

const http = require('http');
const fs=require('fs');
const url=require('url');


const server = http.createServer((req,res)=>{
    if(req.url=="/favicon.ico") return res.end()
    const log=`New Request  on Time : ${Date.now()} and URL : ${req.url}\n `;
    // const MyUrl= url.parse(req.url);
    const MyUrl= url.parse(req.url,true);//True for QueryParameter
    console.log(MyUrl)
    fs.appendFile("log.txt",log,(err,data)=>{
        // res.end("Hello From Server!")
        // switch(req.url){
        switch(MyUrl.pathname){
            case '/' : 
                    res.end("Hello From server");
                    break;
            case '/about':
                    // res.end("Hi ! I am Ajay Negi . ");
                    res.end(`Hi !${MyUrl.query.Name} `);
                    break;
            case '/contact':
                    res.end("Contact Us ");
                    break;
            default:
                    res.end("404 Not Found");
        }
    })
    // console.log("New Request Recevied");
    // console.log(req)
    // res.end("Hello!")
});

server.listen(8000,()=>{
    console.log("server is running on Port 8000")
})