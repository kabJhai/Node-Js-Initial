//Import for file system of node js
const fs = require('fs');

//Append in ansynchronous way
fs.appendFile('names.txt','Data has been  added', 'utf-8',(err)=>{
    if (err) {
        console.log(err);
    }
})
//Reads it in an asynchronous way
fs.readFile('names.txt','utf8',(err,data)=>{
    console.log("Names:",data);
})

//Delete Files
fs.unlink('names1.txt',(err)=>{
    if (err) {
        console.log(err);
    }
})