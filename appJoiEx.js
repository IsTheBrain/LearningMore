const express = require('express');
const path = require('path');
const Joi = require('joi');
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
    const schema = Joi.object().keys({

        email: Joi.string().trim().email().required(),
        password: Joi.string().min(5).max(10).required
    });


    const validation = schema.validate(req.body);
    console.log(validation);
    res.send('did it');

    //Joi.validate(req.body, schema, (err, result) => {
    //    if (err) {
    //        console.log(err);
    //        res.send('error');
    //    }
    //    console.log(result);
    //    res.send('did it');
    //
    //});

});

appFileP.listen(3000

    //minute 2:15