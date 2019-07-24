const Router = require('express').Router()
const { catchErrors } = require('../utils/catchError')

const registerController = require('../controllers/UserController').register
const loginController = require('../controllers/UserController').login

Router.post('/register', catchErrors(registerController))
Router.post('/login', catchErrors(loginController))

module.exports = Router
