// //======================== SET UP ===============================
// const express = require('express')
// const bcrypt = require('bcrypt')
// const router = express.Router()
// const users = express.Router()
// const User = require('../models/users')
// const hashedString = bcrypt.hashSync('yourStringHere', bcrypt.genSaltSync(10))
// bcrypt.compareSync('yourGuessHere', hashedString) //returns true or false




// users.get('/new', (req, res) => {
// 	res.render('users/new.ejs')
//   })
  
//   users.post('/', (req, res) => {
// 	//overwrite the user password with the hashed password, then pass that in to our database
// 	req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
// 	User.create(req.body, (err, createdUser) => {
// 	  console.log('user is created', createdUser)
// 	  res.redirect('/')
// 	})
//   })
  
//   module.exports = users



// // //======================== USER MODEL ===============================
// router.get('/register', (req, res) => {
// 	res.render('users/register.ejs')
// })

// //-------- register --------
// router.post('/register', (req, res) => {

// 	const salt = bcrypt.genSaltSync(10)

// 	req.body.password = bcrypt.hashSync(req.body.password, salt)

// 	User.findOne({username: req.body.username}, (err, userExists) => {
// 		if (userExists) {
// 			res.send('that username is taken')
// 		} else {
// 			User.create(req.body, (err, createdUser) => {
// 				console.log(createdUser)
// 				req.session.currentUser = createdUser
// 				res.redirect('/ocparadise')
// 			})
// 		}
// 	})
// })

// //-------- signin --------
// router.get('/signin', (req, res) => {
// 	res.render('users/signin.ejs')
// })

// router.post('/signin', (req, res) => {
// 	User.findOne({username: req.body.username}, (err, foundUser) => {
// 		if(foundUser) {

// 			const validLogin = bcrypt.compareSync(req.body.password, foundUser.password)
// 			if(validLogin) {
// 				req.session.currentUser = foundUser
// 				res.redirect('/ocparadise')
// 			} else {
// 				res.send('Invalid username or password')
// 			}

// 		} else {

// 			res.send('Invalid username or password')
// 		}
// 	})
// })
// //-------- signout --------
// router.get('/signout', (req, res) => {
// 	req.session.destroy()
// 	res.redirect('/ocparadise')
// })


// module.exports = router