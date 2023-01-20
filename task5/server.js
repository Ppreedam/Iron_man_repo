const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const session = require("express-session");
const cookieParser = require("cookie-parser");
const PORT = 5000;

// Initialization
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
	secret: "shankar",
	saveUninitialized: true,
	resave: true
}));

//Home page
app.get('/', (req, res) => {
    res.send('<a href="/login">Login</a>');
});

// Signup page
app.get('/signup', (req, res) => {
    res.send(`
        <form method="POST" action="/signup">
            <input type="text" name="userId" placeholder="Enter userId">
            <input type="text" name="name" placeholder="Enter Your name">
            <input type="email" name="email" placeholder="Email">
            <input type="password" name="password" placeholder="Password">
            <button type="submit">Signup</button>
        </form>
    `);   
});

// Signup page action
app.post('/signup', (req, res) => {
    const user = {
        userId:req.body.userId,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };
     req.session.user = user;
	 req.session.save();
    res.redirect('/login')
    // console.log(user) 
});


// login page
app.get('/login', (req, res) => {
    res.send(`
        <form method="POST" action="/login">
            <input type="email" name="email" placeholder="Email">
            <input type="password" name="password" placeholder="Password">
            <button type="submit">Login</button>
        </form>
    `);   
});

//login page action
app.post('/login', (req, res) => {
    const sessionuser = req.session.user;
    // console.log(sessionuser)
    
    
    if (req.body.email === sessionuser.email && req.body.password === sessionuser.password) {
        req.session.user = sessionuser;
        res.redirect('/profile');
    } else {
        res.send('Incorrect email or password');
    }
});

//profile page for name display
app.get('/profile', (req, res) => {
    if (!req.session.user) {
        res.redirect('/login');
    }
    res.send(`Welcome, ${req.session.user.name}`);
});

// Host
app.listen(PORT, () => console.log(`Server at ${PORT}`));
