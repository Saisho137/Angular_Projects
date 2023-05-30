'use strict'

const mongoose = require('mongoose')
const Contacts = require('../models/contacts')
const jwt = require('jwt-simple')

const addContact = (req, res) => {
    const contact = new Contacts()
    const body = req.body

    try {
        const decoded = jwt.decode(req.headers.authorization.replace("Bearer ", ""), "mySecretPassword")

        contact.user = new mongoose.Types.ObjectId(decoded.sub)
        contact.name = body.name
        contact.lastNames = body.lastNames
        contact.phone = body.phone
        contact.mobile = body.mobile
        contact.email = body.email

        contact.save().then(
            (savedContact) => {
                res.status(200).send({ contactCreated: savedContact })
            },
            err => {
                res.status(500).send({ message: "Could not add contact to Directory." })
            }
        )
    } catch (err) {
        res.status(401).send({ message: 'Token missing or invalid.', err })
    }
}

const getContact = async (req, res) => {
    const decoded = jwt.decode(req.headers.authorization.replace("Bearer ", ""), "mySecretPassword")
    const contact = await Contacts.find({ user: decoded.sub })

    try {
        res.status(200).send({ Contacts: contact })
    } catch (err) {
        res.status(401).send({ message: 'Token missing or invalid.', err })
    }
}

const updateContact = (req, res) => {
    const contact = new Contacts()
    const body = req.body

    contact._id = req.params._id
    contact.phone = body.phone
    contact.mobile = body.mobile

    Contacts.findByIdAndUpdate(contact._id, contact, { new: true }).then(
        (savedContact) => {
            res.status(200).send({ updatedContact: savedContact })
        })
        .catch((err) => {
        res.status(500).send({ message: "Could not update the contact.", err })
    })
}

const deleteContact = (req, res) => {
    const idContact = req.params._id

    Contacts.findByIdAndDelete(idContact).then(
        (deletedGame) => {
        res.status(200).send({ deletedGame: deletedGame })
    })
    .catch((err) => {
        res.status(500).send({ message: 'Could not delete the Contact from Directory.', err })
    })
}

module.exports = {
    addContact,
    getContact,
    updateContact,
    deleteContact
}