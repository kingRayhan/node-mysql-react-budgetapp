const db = require('../utils/db')
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports.register = async (req, res) => {
    let newUser = await User.create({
        ...req.body,
    })
    res.json(newUser)
}

module.exports.login = async (req, res, next) => {
    /**
     * Find user with email or username
     */
    const [result] = await db.query(
        `select * from users where username = '${req.body.user}' OR email = '${req.body.user}';`
    )

    const user = result[0]

    if (!user) {
        return res.status(404).json({
            user: `user does not exists`,
        })
    }

    let matched = bcrypt.compareSync(req.body.password, user.password)

    if (matched) {
        res.json({
            message: 'Login Successfull',
            token: jwt.sign({ id: user.id }, process.env.APP_SECRET),
        })
    } else {
        res.status(401).json({
            password: 'Wrong password',
        })
    }

    // TODO: set cookie to frontend
}
