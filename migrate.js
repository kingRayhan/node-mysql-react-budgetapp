const db = require('./utils/db')

const Cost = require('./models/Cost')
const User = require('./models/User')

User.hasMany(Cost)
Cost.belongsTo(User)

db.sync({ force: process.env.NODE_ENV === 'dev' })
