const fs = require('fs');
fs.mkdir('tutorial', (err) => {
    if (err)
        console.log(err);
    else {
        console.log('fodler successfully created');
        fs.writeFile('./tutorial/newfile.txt', 'asd', (err) => {
            if (err)
                console.log(err);
            else
                console.log('did it');
        })
        fs.readFile('./tutorial/newfile.txt', 'utf8',(err,file) => {
            if (err)
                console.log(err);
            else
                console.log(file);
        });
        fs.rmdir('tutorial', (err) => {
            if (err)
                console.log(err);
            else {
                console.log('fodler successfully deleted');
            }
        });
        fs.readdir('newfile', (err, files) => {
            if (err)
                console.log(err);
            else
                console.log(file);
        });
    }
}
);
