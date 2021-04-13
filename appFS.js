const fs = require('fs');
//create a file
fs.writeFile('example.txt', "this is example", (err) => {
    if (err)
        console.log(err);
    else
        console.log('successfully created');
    fs.readFile('example.txt', 'utf8', (err, file) => {
        if (err) {
            console.log('errors occurred');
        } else {
            console.log(file);
        }
    }
    );
});

fs.appendFile('newExample.txt', 'Data new', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('did it');
    }
});

//fs.rename('example.txt', 'newExample.txt', (err) => {
//    if (err) {
//        console.log(err);
//    } else {
//        console.log('rename with no error. good');
//    }
//});

fs.unlink('newExample.txt', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('deleted correctly');
    }
});