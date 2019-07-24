require('dotenv').config()
const express = require('express')
const ThrowError = require('./utils/ThrowError')

const app = express()

/**
 * Parse request Body
 */
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api/auth', require('./routes/user'))
app.use('/api/cost', require('./routes/cost'))

app.use((err, req, res, next) => {
    if (err) {
        res.json(ThrowError(err))
    }
    next()
})

app.listen(process.env.PORT, () => {
    console.log(`Server working at http://localhost:${process.env.PORT}`)
})
