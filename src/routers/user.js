const express = require('express')
const User = require('./../models/User')
const Router = new express.Router()

//create new user
Router.post('/newuser', async (req, res) => {
    const user = new User(req.body)
    await user.save()
    const token = await user.generateAuthToken()
    res.status(200).send({ user, token })
})
module.exports = Router