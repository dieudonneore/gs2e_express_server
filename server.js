const express = require('express'); // import express to create a new server
const bodyParser = require('body-parser');// import body-parser 


const app = express();// instanciate express in app variable

app.use(express.json());// let app use express.json to retrieve data in json format

const port="2020";// create a port

const { body, validationResult } = require('express-validator');// this is to validate all entries specify


// validator function to controll users input
const validatorWithexpress = () => {
    return [
        body('titre').isLength({min:4}),
        body('description').isLength({min:10}),
        body('etat').isLength({min:2})
    ];
}

// get request to see if our server is working
app.get('/', (req, res) => {
    res.send("Hello world");
})

// post request to retrieve all the entries made by user
app.post(
    '/gs2e/data',// endpoints
    validatorWithexpress()// validator function
    ,
    (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            res.json({
                "message": req.body
            })
        }
    )

app.listen(port)