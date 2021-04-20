const joi = require('joi');

const arrayString = ['banana', 'bacon', 'cheese'];
const arrayObj = [{ example: 'example1' }, { example: 'example2' }];

const userInput = {
    personalInfo: {
        streetAddress: '1235',
        city: 'bitonto',
        state: 'IT'
    },
    preferences: arrayString
};

const personalInfoSchema = joi.object().keys({
    streetAddress: joi.string().trim().required(),
    city: joi.string().trim().required(),
    state: joi.string().trim().length(2).required()
});

const preferencesSchema = joi.array().items(joi.string());

const schema = joi.object().keys({
    personalInfo: personalInfoSchema,
    preferences: preferencesSchema
});

console.log(schema.validate(userInput));
//joi.validate(userInput, schema, (err, result) => {
//    console.log(err);
//    console.log(result);
//});