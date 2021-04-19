const express = require('express');
const path = require('path');

const appFile = express();

appFile.use('/public', express.static(path.join(__dirname, 'static')));

appFile.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html')
    );
})

appFile.listen(3000);