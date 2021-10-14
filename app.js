import 'bootstrap';
console.log('Hello');

const fs = require("fs");
const request=require('request');
const express = require('express');
const app = express();
const port = 5500;
const data = require('./tools/data');
const hbs = require('hbs');
const path = require ('path');
const Handlebars = require('Handlebars');
const viewPath= path.join(__dirname,'../templates/views');
const publicDirectory = path.join(__dirname,'../public/');


app.use(express.static(publicDirectory));
app.set('view engine','hbs');
hbs.registerView(viewsPath);
app.set('views',viewPath);

Handlebars.registerView(
    "cards",
    "{{cards.title}},{{cards.urlToImage}}, {{cards.description}} , {{cards.timeUpdate}} "
)


app.get('/news',(req,res)=>{
    request({url, json:true}, (error, response) => {
        if(error){
            console.log('Error is here please check and try again');
        }
        else if(response.body.message) {
            console.log('Unable to find location');
        }
        else if (response.body.cards.lenght == 0) {
            console.log("invalid search");
        } 
        else{
            console.log(response.body.cards);
        }
        res.render('index', {
            data: response.body.cards
        })
    });
});


app.get('/templates/views/error.hbs', (req, res) =>{
    res.render('error');
});

// listen
app.listen(port,()=>{
    console.log('server is running')
    
});

