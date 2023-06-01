'use strict'

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ReviewSchema = Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    name: String,
    score: Number,
    visitDate: String,
    comments: String
})

module.exports = mongoose.model('reviews', ReviewSchema)