//Brain notes: I can make a gallery by using a similar code to the index (gallery and comments can be in modules)

//======================== SET UP ===============================
require('dotenv').config();
const express = require('express');
const app = express();
const methodOverride = require(`method-override`)
const mongoose = require('mongoose');
const Chara = require(`./models/characters.js`)
const charaController = require(`./controllers/character.js`)
// const usersController = require('./controllers/users.js')
// const session = require('express-session')
// const bcrypt = require('bcrypt')
// const hashedString = bcrypt.hashSync('yourStringHere', bcrypt.genSaltSync(10))
// bcrypt.compareSync('yourGuessHere', hashedString) //returns true or false
// const sessionsController = require('./controllers/sessions_controller.js')


//======================== SESSIONS ===============================
// const SESSION_SECRET = process.env.SESSION_SECRET
// console.log('Here is the session secret')
// console.log(SESSION_SECRET)

//======================== CONNECT TO DATABASE ===============================
// Database Connection
// mongoose.connect(process.env.DATABASE_URL);
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

//======================== CONNECTION SUCCESS ERROR ===============================

// Database Connection Error/Success
// Define callback functions for various events
const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

//======================== MIDDLEWARE =====================================
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
app.use('/ocparadise/', charaController)
// app.use('/users/', usersController)
// app.use(session({
// 	secret: SESSION_SECRET, 
// 	resave: false, 
// 	saveUninitialized: false
// }))
// app.use('/sessions', sessionsController)


//======================== LISTENER ===============================
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server is listening on port ${PORT}`))