const express = require('express')

const nodeEnv = process.env.NODE_ENV || 'development'
const port = process.env.POST || 8000
const isDevelopment = nodeEnv === 'development'

const app = new express()

if (isDevelopment) {
  const webpack = require('webpack')
  const config = require('./webpack.dev.config')
  const compiler = webpack(config)
  const options = { publicPath: '/' }

  app.use(require('webpack-dev-middleware')(compiler, options))
}

app.get('*', express.static(`${__dirname}/public`))

app.listen(port)
