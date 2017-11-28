const isProduction = process.env.NODE_ENV === 'production'

if (isProduction) {
  module.exports = require('./production')
} else {
  module.exports = require('./development')
}
