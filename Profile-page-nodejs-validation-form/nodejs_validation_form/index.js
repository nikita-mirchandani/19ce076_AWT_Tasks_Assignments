var express = require("express")
var bodyParser = require("body-parser")

const app=express()

// View engine setup
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}));
// app.use(bodyParser.json())

app.use(express.static('public'))
// app.use(bodyParser.urlencoded({
//     extended:true
// }))
// app.post("/table",(req,res)=>{
//     var name= req.body.name;
//     var email = req.body.email;
//     var phno = req.body.phno;
//     var password = req.body.password;
//     res.sendFile(__dirname);
//     var data = {
//         "name":name,
//         "email":email,
//         "phno":phno,
//         "password":password
//     }
//     return res.redirect('SignUp.html')
// })
app.post('/table', (req, res) => {
  res.render('table', {
  firstname: req.body.fname,
  lastname: req.body.lname,
  elecmail: req.body.email,
  num: req.body.number,
  birthday: req.body.dob,
  gend: req.body.gender,
  add: req.body.address,
  ins: req.body.institute,
  depart: req.body.dept,
  semester:req.body.semester
  })
 })
app.get("/",(req,res)=>{
    res.render('index');
    // res.send("Hello From Server")
    // res.set({
    //     "Allow-access-Allow-origin":'*'
    // })
    // return res.redirect('index.ejs');
}).listen(3000);
app.post('/', (req, res) => {
    console.log(req.body);
    res.redirect('table');
   })
   

console.log("Listening on PORT 3000");