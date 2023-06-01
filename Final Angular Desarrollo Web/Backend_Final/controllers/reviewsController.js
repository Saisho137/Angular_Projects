'use strict'

const mongoose = require('mongoose')
const Reviews = require('../models/reviews')
const jwt = require('jwt-simple')

const addReview = (req, res) => {
    const review = new Reviews()
    const body = req.body

    try {
        const decoded = jwt.decode(req.headers.authorization.replace("Bearer ", ""), "mySecretPassword")

        review.user = new mongoose.Types.ObjectId(decoded.sub)
        review.name = body.name
        review.score = body.score
        review.visitDate = body.visitDate
        review.comments = body.comments

        review.save().then(
            (savedReview) => {
                res.status(200).send({ ReviewCreated: savedReview })
            },
            err => {
                res.status(500).send({ message: "Could not add the Review." })
            }
        )
    } catch (err) {
        res.status(401).send({ message: 'Token missing or invalid.', err })
    }
}

const getReview = async (req, res) => {
    const decoded = jwt.decode(req.headers.authorization.replace("Bearer ", ""), "mySecretPassword")
    const review = await Reviews.find({ user: decoded.sub })

    try {
        res.status(200).send({ Reviews: review })
    } catch (err) {
        res.status(401).send({ message: 'Token missing or invalid.', err })
    }
}

const updateReview = (req, res) => {
    const review = new Reviews()
    const body = req.body

    review._id = req.params._id
    review.score = body.score
    review.comments = body.comments

    Reviews.findByIdAndUpdate(review._id, review, { new: true }).then(
        (savedReview) => {
            res.status(200).send({ UpdatedReview: savedReview })
        })
        .catch((err) => {
        res.status(500).send({ message: "Could not update the Review.", err })
    })
}

const deleteReview = (req, res) => {
    const idReview = req.params._id

    Reviews.findByIdAndDelete(idReview).then(
        (deletedReview) => {
        res.status(200).send({ DeletedReview: deletedReview })
    })
    .catch((err) => {
        res.status(500).send({ message: 'Could not delete the Review.', err })
    })
}

module.exports = {
    addReview,
    getReview,
    updateReview,
    deleteReview
}