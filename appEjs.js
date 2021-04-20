const express = require('express');
const path = require('path');
const Joi = require('joi');
const bodyParse = require('body-parser');

const appFileP = express();

appFileP.use('/public', express.static(path.join(__dirname, 'static')));
appFileP.set('view engine', 'ejs');
appFileP.use(bodyParse.urlencoded({ extended: false }));

appFileP.use(bodyParse.json());

appFileP.get('/userQuery', (req, res) => {
    res.render('index', {
        data: {
            userQuery: req.params.userQuery,
            searchResults: ['book1', 'book3', 'book5']}
    });
})

appFileP.listen(3000);

    //minute 2:15