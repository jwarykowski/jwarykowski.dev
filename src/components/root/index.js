const development = require('./development')
const production = require('./production')

const isProduction = process.env.NODE_ENV === 'production'
const root = isProduction ? production : development

module.exports = root
