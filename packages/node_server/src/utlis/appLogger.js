const morgan = require('morgan')
// const { config } = require('../configs/config')

const addLogger = (app) => {
    if ("DEV" === 'DEV') {
        app.use(morgan('dev'))
    }
}

module.exports = addLogger