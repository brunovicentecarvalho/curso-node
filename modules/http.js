const http = require('http');

const port = 8080;
const server = http.createServer((req,resp)=>{
    if(req.url == '/home'){
        resp.writeHead(200, {"Content-Type": "text/html"});
        resp.end("<h1>Home Page<h1>");
    }

    if(req.url == '/registred-banks'){
        const users = [
            {
                company:"Banco Tchesa",
                location:"Africa"
            },
            {
                company:"Banco Underbank",
                location:"North America"
            }
        ];
        resp.writeHead(200, {"Content-Type":"application/json"});
        resp.end(JSON.stringify(users));
    }
})

server.listen(port, ()=> console.log("Online in the port", port))