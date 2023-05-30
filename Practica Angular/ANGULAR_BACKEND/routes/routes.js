'use strict'

const usersController = require('../controllers/usersController')
const contactController = require('../controllers/contactsController')
const token = require('../helpers/token')

const express = require('express') 
const app = express.Router()

//Users Controller
app.post('/registerUser', usersController.registerUser)
app.post('/signInUser', usersController.signInUser)
app.get('/test', token.validateUserToken, usersController.test)

//Contacts Controller
app.post('/addContact', token.validateUserToken, contactController.addContact)
app.get('/getContact', token.validateUserToken, contactController.getContact)
app.put('/updateContact/:_id', token.validateUserToken, contactController.updateContact)
app.delete('/deleteContact/:_id', token.validateUserToken, contactController.deleteContact)

module.exports = app