//Brain notes: I can make a gallery by using a similar code to the index (gallery and comments can be in modules)


//======================== SET UP ===============================
require('dotenv').config();
const express = require('express');
const app = express();
const methodOverride = require(`method-override`)
// const chara = require(`./models/seedChara`)
const mongoose = require('mongoose');
const Chara = require(`./models/characters.js`)

//======================== SESSIONS ===============================




//======================== CONNECT TO DATABASE ===============================
// Database Connection

mongoose.connect(process.env.DATABASE_URL);
mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});


//======================== CONNECTION SUCCESS ERROR ===============================
// const db = mongoose.connection
// db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
// db.on('connected', () => console.log('mongo connected'));
// db.on('disconnected', () => console.log('mongo disconnected'));

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



//======================== TEMP ROUTES =====================================

// Create
app.post('/ocparadise', (req, res) => {
	res.send(req.body);
});

//POST data to DB
app.post('/ocparadise', (req, res) => {
	if (req.body.askForPermissionToUse === 'on') {
		//if checked, req.body.readyToEat is set to 'on'
		req.body.askForPermissionToUse = true;
	} else {
		//if not checked, req.body.readyToEat is undefined
		req.body.askForPermissionToUse = false;
	}
  Chara.create(req.body, (error, createdChara) => {
    res.send(createdChara)
    console.log(error)
  })
  
});



// ------------ New ----------
app.get('/ocparadise/new', (req, res) =>{
  res.render(`new.ejs`)
})

// ------------ Index ----------
app.get('/ocparadise', (req, res)=>{
  Chara.find({}, (error, foundChara)=>{
      res.render('index.ejs', {
          chara: foundChara
      });
  });
});

// ------------ Show ----------
// app.get(`/ocparadise/:id`, (req, res)=>{
//   res.render("show.ejs", {
//       chara: seedChara[req.params.id],
//   })
// });

// app.get(`/ocparadise/:id`, (req, res)=>{
//   Chara.findById(req.params.id, (err, foundChara)=>{
//   res.render("show.ejs", {
//       chara: foundChara
//   });
//   })
// });


// app.get(`/ocparadise/:id`, (req, res)=>{
//     Chara.findById(req.params.id, (err, foundChara)=>{
//       if (!foundChara) {
//         // handle case where no character was found with the given ID
//         res.status(404).send("Character not found");
//         return;
//       }
//       res.render('show.ejs', { chara: foundChara });
//     });
//   });



// app.get(`/ocparadise/:id`, (req, res)=>{
//     const id = req.params.id;
//     Chara.findById(id, (err, foundChara)=>{
//       if (err) {
//         // handle error
//         res.status(500).send("Error finding character");
//         return;
//       }
//       if (!foundChara) {
//         // handle case where no character was found with the given ID
//         res.status(404).send("Character not found");
//         return;
//       }
//       res.render('show.ejs', { chara: foundChara });
//     });
//   });
  

app.get(`/ocparadise/:id`, (req, res)=>{
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    // handle case where the ID is not valid
    res.status(400).send("Invalid ID");
    return;
  }
  Chara.findById(id, (err, foundChara)=>{
    if (err) {
      // handle error
      res.status(500).send("Error finding character");
      return;
    }
    if (!foundChara) {
      // handle case where no character was found with the given ID
      res.status(404).send("Character not found");
      return;
    }
    res.render('show.ejs', { chara: foundChara });
  });
});


  
// // ------------ POST ----------
// app.post('/ocparadise', (req, res) => {
//   seedChara.push(req.body);
//   res.redirect('/ocparadise');
// });

// // ------------ Delete ----------
// app.delete(`/ocparadise/:id`, (req, res) => {
//   seedChara.splice(req.params.id, 1);
//   res.redirect('/ocparadise');
// });

// // ------------ Edit ----------
// app.get('/ocparadise/:id/edit', (req, res) => {
//   res.render('edit.ejs', {
//     chara: seedChara[req.params.id],
//       id: req.params.id
//   })
// })

// // ------------ UPDATE ----------

// app.put('/ocparadise/:id', (req, res) => {
//   seedChara[req.params.id] = req.body
//  res.redirect('/ocparadise');


// })


//======================== LISTENER ===============================
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server is listening on port ${PORT}`))

// const PORT = 3000;
// app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));