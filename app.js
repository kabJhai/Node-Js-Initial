//Express
const express = require('express');
const  app = express();
//Body parser
const body_parser = require('body-parser');const e = require('express');

//Path
const path = require('path');
//DATABASE CONNECTION
require("./src/database/connection");
require("./src/bootstrap")();
//JSON Parser
app.use(
    body_parser.urlencoded({
        extended:true
    })
)

//Middle Wares
app.use(body_parser.json());
app.use((req,res,next)=>{
    next()
});

//Handle routes
app.route("/").get((req,res)=>{
    res.sendFile(path.resolve('./index.html'));
});

let port = 3000;
app.listen(port,()=>{
    console.log("Server Started on Port: " + port);
});
