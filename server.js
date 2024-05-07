


const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}));  //Enabling express to handle JSON data
app.use(express.static('public'));

var exphbs = require('express-handlebars')
app.engine('handlebars', exphbs.engine({
    defaultLayout: null
}));
app.set('view engine', 'handlebars')
app.set('views', './views');
app.use(express.static('public'));

let Users = []

let username = "a"
let email = ""

let currUser = null

app.get('/', function(req, res, next){

    currUser = null;

    res.render('home')
})

app.get('/login', function(req, res, next){
    res.render('login')
})

app.get('/register', function(req, res, next){
    res.render('register')
})

app.post('/users', function(req, res, next){
    let user = req.body

    console.log(user)

    username = user.username

    email = user.email

    currUser = user

    Users.push(user)

    console.log(Users)

    res.send(Users).status(200)
})

app.post('/users/pfp', function(req,res,next){
    let pfp = req.body;

    currUser.pfp = pfp.pfpUrl;

    res.send(currUser).status(200)
})

app.post('/users/aboutme', function(req,res,next){
    let aboutme = req.body;

    currUser.aboutme = aboutme.desc;

    res.send(currUser).status(200)
})

app.get('/users', function(req, res, next){
    res.send(Users).status(200)
})

app.get('/user:username', function(req, res, next){

    let user = req.params.username

    Users.forEach(element => {
        if(element.username == user){
            currUser = element
        }

    })

    username = user

    res.render('user', {
        user: currUser
    })
})

app.get('/user', function(req, res, next){

    username = currUser.username

    res.render('user', {
        user: currUser
    })
})

app.get('/profile', function(req, res, next){
    res.render('profile',{
        user: currUser
    })
})

app.listen(3000)

