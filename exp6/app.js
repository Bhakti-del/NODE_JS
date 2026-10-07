const http = require("http");
const os = require("os");
const path = require("path");
const eventEmitter = require("events");
//OS module
console.log("Platform: ",os.platform());
console.log("Free Memory: ",os.freemem());
//Path module
console.log("File name: ",path.basename(__filename));
//Event module
const event= new eventEmitter();
event.on("Welcome",()=>console.log("Welcome event triggered!!"));
//Http module
const server =  http.createServer((req,res) => {
    event.emit("Welcome");
    res.end("Hello!Welcome to Node.js Server");
});
server.listen(3000,()=>{
    console.log("Server running at http://localhost:3000");
});
