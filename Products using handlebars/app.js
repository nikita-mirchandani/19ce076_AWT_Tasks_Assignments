const express = require('express');
const exphbs = require('express-handlebars');

const app = express(); 
// configure handlebars
app.engine('hbs',exphbs({
    defaultLayout : 'layout', //layout handlebar should be displayed when first my website will be loaded
    extname: '.hbs',   //we can change extension using extname flags..so here we'll write .hbs extension which we r going to use
})); //instead of exhbs we can use hbs

app.set('view engine','hbs');

app.get('/',(req,res)=>{
    res.render('index');
});

app.listen(3000,()=>{
    console.log('Listening on port 3000..');
});

