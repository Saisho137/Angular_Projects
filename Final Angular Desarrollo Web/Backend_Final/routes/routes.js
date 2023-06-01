'use strict'

const usersController = require('../controllers/usersController')
const reviewsController = require('../controllers/reviewsController')
const token = require('../helpers/token')

const express = require('express') 
const app = express.Router()

//Users Controller
app.post('/registerUser', usersController.registerUser)
app.post('/signInUser', usersController.signInUser)
app.get('/test', token.validateUserToken, usersController.test)

//Reseñas Controller
app.post('/addReview', token.validateUserToken, reviewsController.addReview)
app.get('/getReview', token.validateUserToken, reviewsController.getReview)
app.put('/updateReview/:_id', token.validateUserToken, reviewsController.updateReview)
app.delete('/deleteReview/:_id', token.validateUserToken, reviewsController.deleteReview)

module.exports = app