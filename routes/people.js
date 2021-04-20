const express = require('express');
const route = express.Router();

route.use((req, res, next) => {
    console.log('middleWare');
    next();
});

route.get('/', (req, res) => {

    res.send('/hitted');
});

route.get('/example', (req, res) => {

    res.send('/example hitted');
});

module.exports = route;