const sequelize = require('sequelize')

const db = require('../utils/db')
// TODO: Custom error msg
const Cost = db.define('cost', {
    purpose: {
        type: sequelize.STRING,
        validate: {
            len: {
                args: [5],
                msg: 'Purpose length must be atleast 5 character',
                // TODO: 5 words
            },
        },
        allowNull: false,
    },
    type: {
        type: sequelize.ENUM('EXPENSE', 'INCOME'),
        allowNull: false,
        validate: {
            isEnum: exType => {
                if (!['EXPENSE', 'INCOME'].includes(exType)) {
                    throw new Error(`Type should be EXPENSE or INCOME`)
                }
            },
        },
    },
    amount: {
        type: sequelize.DOUBLE,
        allowNull: false,
    },
})

module.exports = Cost
