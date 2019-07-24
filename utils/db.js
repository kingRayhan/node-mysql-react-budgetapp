require('dotenv').config()

const Sequelize = require('sequelize')
require('colors')
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    dialect: 'mysql',
})

/**
 * Test Connecting
 */
sequelize
    .authenticate()
    .then(res => console.log('Database Connected Successfully'.green))
    .catch(e => console.log(e))

module.exports = sequelize
