const express = require('express')
const cookie = require('cookie-parser')
const compression = require('compression')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const CheckError = require('./utlis/checkError')
const limiter = require('./utlis/rateLimitter')
const addLogger = require('./utlis/appLogger')
const { config } = require('./configs/config')
const authRouter = require('./routes/authRoutes')
const app = express()
require('./database/connectDb')

app.use(express.json())
app.use(compression())
app.use(mongoSanitize())
app.use(helmet())
app.use(limiter)
app.use(cookie())

addLogger(app)

app.use((req, res, next) => {
    res.setHeader('X-XSS-Protection', '1; mode=block')
    next()
})

app.get('/', (req, res) => {
    res.status(200).json({ status: true })
})
app.use('/api/v0.1/auth', authRouter)
app.all('*', (req, res) => {
    const error = new CheckError(
        `Can't find ${req.originalUrl} on this server!`,
        404
    )
    res.status(error.statusCode).json({
        success: false,
        error: error.message,
    })
})

app.listen(config.PORT, () => {
    console.log(`[⚡] Server Is Running on http://localhost:${config.PORT}`)
})

module.exports = { app }