// What it is: Node.js is a JavaScript runtime environment built on Chrome's V8 JavaScript engine, 
// enabling the development of server-side applications using JavaScript.

// How it works:

// A client sends a request to the Node.js server.
// Node.js, being event-driven and non-blocking by design, can handle many requests concurrently.
// If a request doesn't require I/O operations, it's processed swiftly and a response is sent back.
// For I/O-bound or blocking requests, Node.js doesn't wait for the task to be completed. Instead, 
// it offloads the task, allowing it to run asynchronously (often via its internal Thread Pool). 
// Once the I/O operation is done, a callback is triggered to send the response back to the client.


// For Bloacking Request , places incoming requests in the Event Queue.
// The Event Loop continually checks this queue. If a request doesn't require I/O operations, 
// the Event Loop processes it swiftly and sends a response back.
// For I/O-bound or blocking requests, the Event Loop doesn't wait for the task to complete. 
// Instead, it delegates these requests to the Thread Pool where separate threads handle the required operations.
// In certain cases, for especially blocking tasks, External Resources are utilized.
//  Once these tasks are complete, the result is sent back to the Event Loop.
// Once the Event Loop receives the result, either from its own immediate processing, 
// the Thread Pool, or External Resources, it sends out the responses to the clients.

const fs = require('fs');
const os= require('os');
// ****************Reading file in Sync
// console.log("1");
// const result = fs.readFileSync("./contact.txt","utf-8");
// console.log(result);
// console.log("2");

//********************Async Read*************** */
// console.log("1");
//  fs.readFile("./contact.txt","utf-8",(err,res)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(res);
//     }
//  });
// console.log("2");

console.log(os.cpus().length);// Default size of Thread pool is 4
//Maximus size :  the number of CPU cores on my system is 4, so the maximum size of the Thread Pool will be 4
