const express = require('express');
const path = require('path');
const bodyParse = require('body-parser');

const appFileP = express();

appFileP.use('/public', express.static(path.join(__dirname, 'static')));
appFileP.use(bodyParse.urlencoded({ extended: false }));

appFileP.use(bodyParse.json());

appFileP.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index2.html')
    );
})

appFileP.post('/', (req, res) => {
    console.log(req.body);
    //database
    res.json({ success : true });
});

appFileP.listen(3000);