const mongoose = require('mongoose')
const validator = require('validator')
const User = require('./User')
const contactSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value))
                throw new Error('Not valid Email')
        }
    },
    mobile: {
        type: String,
        required: true,
        trim: true
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, { timestamps: true })

const Contact = mongoose.model('Contact', contactSchema)
module.exports = Contact