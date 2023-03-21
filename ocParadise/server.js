//======================== SET UP ===============================
const express = require('express');
const app = express();
const methodOverride = require(`method-override`)
require('dotenv').config();
const chara = require(`./models/seedChara`)
const mongoose = require('mongoose');

//======================== SESSIONS ===============================



//======================== CONNECT TO DATABASE ===============================
// Database Connection
// mongoose.connect(process.env.DATABASE_URL);



//======================== CONNECTION SUCCESS ERROR ===============================
// const db = mongoose.connection
// db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
// db.on('connected', () => console.log('mongo connected'));
// db.on('disconnected', () => console.log('mongo disconnected'));



//======================== MIDDLEWARE =====================================
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))



//======================== TEMP ROUTES =====================================

// ------------ New ----------
app.get('/ocparadise/new', (req, res) =>{
  res.render(`new.ejs`)
})

// ------------ Index ----------
app.get('/ocparadise', (req, res) =>{
  res.render(`index.ejs`,{
    Chara: seedChara
  })
});

// ------------ Show ----------
app.get(`/ocparadise/:id`, (req, res)=>{
  res.render("show.ejs", {
      chara: seedChara[req.params.id],
  })
});

// ------------ POST ----------
app.post('/ocparadise', (req, res) => {
  seedChara.push(req.body);
  res.redirect('/ocparadise');
});

// ------------ Delete ----------
app.delete(`/ocparadise/:id`, (req, res) => {
  seedChara.splice(req.params.id, 1);
  res.redirect('/ocparadise');
});

// ------------ Edit ----------
app.get('/ocparadise/:id/edit', (req, res) => {
  res.render('edit.ejs', {
    chara: seedChara[req.params.id],
      id: req.params.id
  })
})


// ------------ UPDATE ----------

app.put('/ocparadise/:id', (req, res) => {
  seedChara[req.params.id] = req.body
 res.redirect('/ocparadise');


})


//======================== LISTENER ===============================
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server is listening on port ${PORT}`))


