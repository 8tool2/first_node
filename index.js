const http = require('http');
const fs = require('fs');
const url = require('url');

const port = 8080;
const defaultFile = 'index.html'; // Relative file path

const server = http.createServer(function(req, res) {
    var q = url.parse(req.url, true);
    var filename = q.pathname === '/' ? '/' + defaultFile : q.pathname;
    
    fs.readFile("." + filename, function(error, data) { // Using the relative file path
        if (error) {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end("File not found");
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        }
    });
});

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
