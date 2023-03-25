//======================== SET UP ===============================
const express = require('express')
const router = express.Router()
const Chara = require('../models/characters.js')
const mongoose = require('mongoose');

//======================== MIDDLEWARE FOR AUTH. ROUTES ===============================
// const authRequired = (req, res, next) => {
// 	console.log(req.session.currentUser);
// 	if (req.session.currentUser) {
// 	  next(); 
// 	} else {
// 	  // if there is no user 
// 	  res.send('You must be logged in to do that!');
// 	  return res.redirect('/users/signin');
// 	}
//   }
  
//======================== ROUTES ===============================

// ------------ New ----------

router.get('/new', (req,res) => {
    res.render('new.ejs', {
    //   currentUser: req.session.currentUser
    });
})

// ------------ Index ----------

router.get('/', (req, res) => {
	Chara.find({}, (err, foundChara) => {
		if(err){console.log(err.message)}
		res.render('index.ejs', {
			chara: foundChara,
			// currentUser: req.session.currentUser || null // add a check for undefined value
		})
	})
})



// ------------ Show ----------
router.get('/:id', (req, res) => {
	Chara.findById(req.params.id, (err, foundChara) => {
		if(err){console.log(err.message)}
		res.render('show.ejs', {
			chara: foundChara,
			// currentUser: req.session.currentUser

		})
	})
})

// ------------ POST ----------

router.post('/', (req, res) => {
	if (req.body.askForPermissionToUse === 'on') {
		req.body.askForPermissionToUse = true;
	} else {
		req.body.askForPermissionToUse = false;
	}
	Chara.create(req.body, (error, createdChara) => {
        console.log(createdChara, 'CREATED CHARACTER')
		res.redirect('/ocparadise')
	});
});

// ------------ Delete ----------

router.delete('/:id', (req, res) => {
	Chara.findByIdAndDelete(req.params.id, (err, deletedChara) => {
		if (err) {
			console.log(err)
		} else {
			console.log(deletedChara)
			res.redirect('/ocparadise')
		}
	})
})



// ------------ Edit ----------
router.get('/:id/edit', (req, res) => { //auth required
	Chara.findById(req.params.id, (err, foundChara) => {
		if(err) {
			console.log(err)
		} else {
			res.render('edit.ejs', {
				chara: foundChara,
				// currentUser: req.session.currentUser

			})
		}
	})
})


// ------------ UPDATE ----------

// Update a character
// router.put('/ocparadise/:id', (req, res) => {
// 	const { id } = req.params; 
// 	Chara.findByIdAndUpdate(id, req.body, { new: true },
// 	  (err, updatedChara) => {
// 	  if (err) {
// 		console.log(err);
// 		res.send(err);
// 	  } else {
// 		console.log(updatedChara);
// 		res.redirect('/ocparadise');
// 	  }
// 	});
//   });
  
  router.put('/:id', async (req, res) => {
    try {
      const updatedChara = await Chara.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.redirect('/ocparadise');
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  

// ======================== EXPORTS ===============================

module.exports = router
