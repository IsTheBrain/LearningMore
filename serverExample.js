const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen('3000');

app.get('/example', (req, res) => { res.send('hitting example'); });

app.get('/example/:name/:age', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    console.log(req.query['tutorial']);
    res.send(req.params.name + " : " + req.params.age);
});

//minute 1.50