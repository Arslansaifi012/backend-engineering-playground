

const express = require('express') ;
const bodyParser = require('body-parser') ;

const app = express() ;

app.use((req, res, next) =>{
    console.log('first dummy middleWare', req.url, req.method);
    next() ;
}) ;

app.use(bodyParser.urlencoded()) ;
app.use(express.json())

app.use((req, res, next)=>{
    console.log('second dummy middleWare', req.url, req.method);
    next() ;
}) ;

