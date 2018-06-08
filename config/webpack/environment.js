const { environment } = require('@rails/webpacker')
const typescript =  require('./loaders/typescript')
const tslint =  require('./loaders/tslint')

environment.loaders.append('typescript', typescript)
environment.loaders.append('tslint', tslint)
module.exports = environment
