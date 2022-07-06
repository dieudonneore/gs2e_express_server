const express = require('express'); // import express to create a new server
const bodyParser = require('body-parser');// import body-parser 


const app = express();// instanciate express in app variable

app.use(express.json());// let app use express.json to retrieve data in json format

const port="2020";// create a port



const tasks = require('./routes/tasksRouter');
const expressValidator = require('./validators/expressValidator');
const fieldValidator = require('./validators/fieldValidator');
const { body, validationResult } = require('express-validator');

app.use('/tasks', tasks);

app.use('/gs2e/data', fieldValidator(),tasks);

app.listen(port);