const app = require('./main/index.js')
const serverless = require('serverless-http')

module.exports.handler = serverless(app)
