const Sequelize = require('sequelize')
const bcryptjs = require('bcryptjs')
const db = require('../utils/db')
const uuid = require('uuid/v4')

const notEmptyValidate = name => {
    return {
        notNull: {
            msg: name + ' required',
        },
        notEmpty: {
            msg: name + ' required',
        },
    }
}

const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            ...notEmptyValidate('Name'),
        },
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: {
            msg: 'Already in use',
        },
        validate: {
            ...notEmptyValidate('Username'),
            isValidUsername: str => {
                if (str.split(' ').length > 1) throw new Error('Username should not have space')
            },
        },
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: {
            msg: 'Already in use',
        },
        validate: {
            ...notEmptyValidate('Email'),
            isEmail: {
                msg: 'Invalid email address',
            },
        },
    },
    profilePhoto: {
        type: Sequelize.STRING,
        validate: {
            isUrl: {
                args: true,
                msg: 'Wrong url',
            },
        },
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            ...notEmptyValidate('Password'),
            len: {
                args: [3, 25],
                msg: 'Password length must be within 3 to 25 characters ',
            },
        },
    },
})

User.beforeCreate((user, options) => {
    user.password = bcryptjs.hashSync(user.password)
})

module.exports = User
