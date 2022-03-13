// get & post in server
const express = require('express');
const app = express();
app.use(express.static('server/public'))
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Array - hold the data 

let calculation = []; // Wasn't   - take a break return!!!
let Total =0;

app.post('/calculator')

