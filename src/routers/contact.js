const express = require('express')
const Contact = require('./../models/Contact')
const Auth = require('./../middleware/auth')
// const asyncMiddleware = require('./../middleware/async')
const Router = new express.Router()

//create new contact
Router.post('/addContact', Auth, async (req, res, next) => {
    const contact = new Contact({ ...req.body, userID: req.user._id })
    await contact.save()
    res.status(200).send(contact)
})

//get all contacts
Router.get('/getList', Auth, async (req, res) => {

    const contact = await Contact.find({userID: req.user._id})
    if (!contact)
        return res.status(400).send('Not found')
    res.status(200).send(contact)

})

//get recent 5 contacts
Router.get('/getRecentList', Auth, async (req, res) => {

    const contact = await Contact.find({userID: req.user._id}).sort({ "createdAt": -1 }).limit(5)
    if (!contact)
        return res.status(400).send('Not found')
    res.status(200).send(contact)

})
module.exports = Router