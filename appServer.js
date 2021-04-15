const http = require('http');
const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.write('hello world from node js');
        res.end();
    } else {
        res.write('using other domain');
        res.end();
    }
    
});

server.listen('3000');