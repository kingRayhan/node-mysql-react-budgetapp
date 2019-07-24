const Router = require('express').Router()

const { catchErrors } = require('../utils/catchError')
let Authenticated = require('../middlewares/Authenticated')
let costControllers = require('../controllers/CostController')

Router.post('/', Authenticated, catchErrors(costControllers.store))

module.exports = Router
