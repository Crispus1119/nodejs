    const http = require('http');
    const path = require('path');
    const fs = require('fs');
    
    const server = http.createServer((req, res) => {
        let filePath = path.join(__dirname, 'VSPRJ/public',req.url == '/' ? '404.html' : req.url);
        console.log(filePath);
        let extname = path.extname(filePath);
        let contentType = 'text/html';
        if(req.url=='/'){
             filePath = path.join(__dirname, 'VSPRJ/public',req.url == '/' ? 'homepage.html' : req.url);
            console.log(req.url);
        }else if(req.url=='/fruitinfo'){
            filePath = path.join(__dirname, 'VSPRJ/public',req.url == '/' ? 'FruitsInfo.html' : req.url);
        }else{
            filePath = path.join(__dirname, 'VSPRJ/public',req.url == '/' ? '404.html' : req.url);
            console.log(req.url);
        
        }
    
        fs.readFile(filePath, (err, content) => {
            if (err) {
                if (err.code == 'ENOENT') {
                    // page not found
                    res.statusCode = 200;
                    fs.readFile(path.join(__dirname, 'VSPRJ/public', '404.html'), (err, content) =>{
                        // console.log(path.join(__dirname,'public','404.html'));
                        res.writeHead(200, {'Content-Type': 'text/html'});
                        res.end(content, 'utf8');
                    });
                }
                else {
                    // some server errors
                    res.writeHead(500);
                    res.end(`Server Error: ${err.code}`);
                }
            }
            else {
                // success
                // console.log("success");
                res.writeHead(200, {'Content-Type':'text/html'});
                res.end(content, 'utf8');
            }
        });
    });
    server.listen(5000);