const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
    const readStream = fs.createReadStream('example.png');
    res.writeHead(200, { 'Content-type': 'image/png' });
    readStream.pipe(res);
}).listen(3000);