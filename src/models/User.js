const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const Contact = require('./Contact')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    authorizations: [{
        authorization: {
            type: String,
            required: true
        }
    }],
    deviceTokens: [{
        deviceToken: {
            type: String,
            required: true
        }
    }],
    fingerPrint: {
        type: String,
        required: true
    }
}, { timestamps: { createdAt: 'created_at' } })

//relation
userSchema.virtual('Contact', {
    ref: 'Contact',
    localField: '_id',
    foreignField: 'userID'
})

//generate token for each new user
userSchema.methods.generateAuthToken = async function () {
    const user = this;
    const authorization = jwt.sign({ _id: user._id.toString() }, 'authorization')
    const deviceToken = jwt.sign({ _id: user._id.toString() }, 'deviceToken')
    user.authorizations = user.authorizations.concat({ authorization })
    user.deviceTokens = user.deviceTokens.concat({ deviceToken })
    await user.save()
    return { authorization, deviceToken }
}
const User = mongoose.model('User', userSchema)
module.exports = User