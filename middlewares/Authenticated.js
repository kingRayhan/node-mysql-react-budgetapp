const jwt = require('jsonwebtoken')
const User = require('../models/User')

module.exports = async (req, res, next) => {
    let token = req.headers.authorization
    token = token.replace('Bearer ', '')

    if (!token)
        return res.status(401).json({
            message: 'Authentication Required',
        })

    let id = jwt.decode(token).id

    let user = await User.findByPk(id)

    req.user = user
    next()
}
