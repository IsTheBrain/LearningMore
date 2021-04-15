const fs = require('fs');

//fs.readFile('largeFile.txt', (err, file) => {
//    if (err) console.log(err);
//    else {
//        console.log(file);
//    }
//});

const readStream = fs.createReadStream('largeFile.txt', 'utf8');
readStream.on('data', (chunk) => { console.log(chunk); });