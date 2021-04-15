const fs = require('fs');
const readstream = fs.createReadStream('example.txt', 'utf8');
const writeStream = fs.createWriteStream('example2.txt')
readstream.on('data', (chunk) => {
    writeStream.write(chunk);
    console.log(chunk);
});