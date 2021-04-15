const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();
const unziop = zlib.createGunzip();
const readStream = fs.createReadStream('largeFile2.gz');
const writeStream = fs.createWriteStream('largeFileUncopressedaa.txt');
//readStream.on('data', (chunk) => { writeStream.write(chunk); });
//readStream.pipe(gzip).pipe(writeStream);
readStream.pipe(unziop).pipe(writeStream);