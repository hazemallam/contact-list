const jwt = require('jsonwebtoken')
const User = require('../models/User')

const Auth = async (req, res, next) => {
    try {
        const authorization = req.header('authorization')
        const deviceToken = req.header('deviceToken')
        const fingerPrint = req.header('fingerPrint')
        const authorizationDecoded = jwt.verify(authorization, 'authorization')
        // const deviceTokenDecoded = req.verify(deviceToken, 'deviceToken')
        const user = await User.findOne({ _id: authorizationDecoded._id, 'authorizations.authorization': authorization, 'deviceTokens.deviceToken': deviceToken, 'fingerPrint': fingerPrint })
        if (!user)
            throw new Error('unauthorized')
        req.authorization = authorization
        req.deviceToken = deviceToken
        req.fingerPrint = fingerPrint
        req.user = user
        next()

    }
    catch (e) {
        res.send({ error: 'unauthorized' })

    }
}
module.exports = Auth