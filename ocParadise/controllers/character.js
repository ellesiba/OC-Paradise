// //======================== SET UP ===============================
// const express = require(`express`)
// const Chara = require('../models/fruit.js')


// //======================== MIDDLEWARE FOR AUTH. ROUTES ===============================


// //======================== ROUTES ===============================

// // ------------ New ----------
// app.get('/ocparadise/new', (req, res) =>{
//   res.render(`new.ejs`)
// })

// router.get('/seed', (req, res) =>{
// 	Fruit.create([
// 		{
//             name:'grapefruit',
//             color:'pink',
//             readyToEat:true
//         },
//         {
//             name:'grape',
//             color:'purple',
//             readyToEat:false
//         },
//         {
//             name:'avocado',
//             color:'green',
//             readyToEat:true
//         }
// 	], (err, data) => {
// 		res.redirect('/fruits')
// 	})
// })

// // ------------ Index ----------
// router.get('/', (req, res) => {
// 	seedChara.find({}, (err, foundChara) => {
// 		if(err){console.log(err.message)}
// 		res.render('index.ejs', {
//     Chara: foundChara
// 		})
// 	})
// })


// // ------------ Show ----------
// router.get('/:id', (req, res) => {
// 	Fruit.findById(req.params.id, (err, foundFruit) => {
// 		if(err){console.log(err.message)}
// 		res.render('show.ejs', {
// 			fruit: foundFruit
// 		})
// 	})
// })

// // ------------ POST ----------
// router.post('/', (req, res) => {
// 	if (req.body.readyToEat === 'on') {
// 		//if checked, req.body.readyToEat is set to 'on'
// 		req.body.readyToEat = true;
// 	} else {
// 		//if not checked, req.body.readyToEat is undefined
// 		req.body.readyToEat = false;
// 	}
//     // console.log(req.body, 'THIS IS FRUIT ')
// 	Fruit.create(req.body, (error, createdFruit) => {
//         // console.log(error, "THIS IS THE ERROR")
//         console.log(createdFruit, 'CREATED FRUIT')
// 		res.redirect('/fruits') //<--- redirect to index.ejs
// 		// res.redirect('/fruits/' + createdFruit.id); <-- redirect to a single show page
// 	});
// });

// // ------------ Delete ----------
// router.delete('/:id', (req, res) => {
// 	Fruit.findByIdAndDelete(req.params.id, (err, deletedFruit) => {
// 		// findByIdAndDelete will delete a document with a given id 
// 		if(err) {
// 			console.log(err)
// 			res.send(err)
// 		} else {
// 			// redirect to the index page if the delete is successful 
// 			console.log(deletedFruit)
// 			res.redirect('/fruits')
// 		}
// 	})
// })

// // ------------ Edit ----------
// router.get('/:id/edit', authRequired, (req, res) => {
// 	Fruit.findById(req.params.id, (err, foundFruit) => {
// 		if(err) {
// 			console.log(err)
// 			res.send(err)
// 		} else {
// 			// make the edit form show the existing data 
// 			res.render('edit.ejs', {
// 				fruit: foundFruit
// 			})
// 		}
// 	})
// })


// // ------------ UPDATE ----------
// router.put('/:id', (req, res) => {
// 	// let's make out route actually update the model 
// 	// console.log(req.body)
// 	if (req.body.readyToEat === "on") {
// 		req.body.readyToEat = true
// 	} else {
// 		req.body.readyToEat = false
// 	}

// 	Fruit.findByIdAndUpdate(req.params.id, req.body, { new: true,}, 
// 	(err, updatedFruit) => {
// 		// findByIdAndUpdate updates a fruit with a given id
// 		// the new option means we wait get the updated fruit returned 
// 		// without this flag, we will get the fruit before it was modified

// 		if(err) {
// 			console.log(err)
// 			res.send(err)
// 		} else {
// 			console.log(updatedFruit)
// 			// redirect to the index route 
// 			res.redirect('/fruits')
// 		}

// 	})
// })




// //======================== EXPORTS ===============================

// module.exports = router
