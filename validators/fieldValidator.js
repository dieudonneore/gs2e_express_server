const { body } = require('express-validator');// this is to validate all entries specify
// validator function to controll users input
const fieldValidator = () => {
    return [
        body('titre').isLength({min:4}),
        body('description').isLength({min:10}),
        body('etat').isLength({min:2})
    ];
}

module.exports = fieldValidator;