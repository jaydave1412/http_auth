'use strict'

const http = require('http');
const auth = require('http-auth');
const path = require('path');
const fs = require('fs');
const authConnect = require('http-auth-connect');
const basic = auth.basic({
    realm : "Private area",
    file : path.join(__dirname,"htpasswd"),
});
console.log(fs.readFileSync(path.join(__dirname,"htpasswd")));
const app = require('express')();
const server = http.createServer(app);

app.get('/',authConnect(basic),(req,res)=>{
    res.send("hello world")
})

server.listen(3000,()=>{
    console.log('server running at 3000')
})
