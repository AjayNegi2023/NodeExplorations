const fs= require("fs");
//Create and override the data in file


// fs.writeFileSync("./text.txt","Hello");//Sync

// fs.writeFile("./text.txt","Hello Async ",(err)=>{});//Async

// fs.writeFile("./contact.txt","Number is : +91983886763",(err)=>{})// Create Contact.txt then append data 



//*******************************************Read File *********************************************************** */
const result = fs.readFileSync("./contact.txt","utf-8");//Sync
//#Async
//It does not return data but it takes a call back function to read the file
 fs.readFile("./contact.txt","utf-8",(err,res)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(res)
    }
});
console.log(result);

//************************************Append Data********************************************************* */

//Sync 

// fs.appendFileSync("./text.txt","Appended data Successfully !")

//****************************************Copy File*******************************************
// fs.copyFileSync("./text.txt","./copy.txt");

//***************************************Delete File******************************************

// fs.unlinkSync("./copy.txt");


//States of File

// const state = fs.statSync("./text.txt");
// console.log(state);


