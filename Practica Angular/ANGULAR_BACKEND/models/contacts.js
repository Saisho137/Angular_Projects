'use strict'

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ContactSchema = Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    name: String,
    lastNames: String,
    phone: String,
    mobile: String,
    email: String
})

module.exports = mongoose.model('contacts', ContactSchema)