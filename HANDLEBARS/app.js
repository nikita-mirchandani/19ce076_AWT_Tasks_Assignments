const express = require('express');
const exphbs = require('express-handlebars');
const Router = express.Router();
const app = express(); 
// configure handlebars
app.engine('hbs',exphbs({
    defaultLayout : 'main', //main handlebar should be displayed when first my website will be loaded
    extname: '.hbs',   //we can change extension using extname flags..so here we'll write .hbs extension which we r going to use
})); //instead of exhbs we can use hbs

app.set('view engine','hbs');

app.get('/Signin',(req,res)=>{
    res.render("Signin",{title: 'Signin Page' });
});
app.get('/', function(req, res) {
    res.render('Signup', { title: 'Default Page' });
});
app.get('/Signup', function(req, res) {
    res.render('Signup', { title: 'Signup Page' });
});
 
app.listen(3000,()=>{
    console.log('Listening on port 3000..');
});



