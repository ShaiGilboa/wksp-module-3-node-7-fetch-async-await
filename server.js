'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');


const {makeLaughHandler,homeHandler,dadHandler,geekHandler,trunaldHandler,mainHandler} = require('./data/handlers')

const PORT = process.env.PORT || 8000;

express()
    .use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    })
	.use(morgan('dev'))
	.use(express.static('public'))
    .use(bodyParser.json())
    .use(express.urlencoded({extended: false}))
    .set('view engine', 'ejs')

    .get('/', homeHandler)
    .post('/action', mainHandler)

    .listen(PORT, () => console.log(`Listening on port ${PORT}`));