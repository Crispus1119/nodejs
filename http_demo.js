const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

// Create server object
http.createServer((req, res)=> {
    console.log("123");
    res.statusCode = 200;
    res.write("Hello World");
    res.end();
}).listen(5000, function() {
    let n=10;
    console.log(n);
});

