import mongoose from 'mongoose'

mongoose.connect("mongodb//localhost/nodeAPI",{useMongoClient: true})
mongoose.Promise = global.Promise

module.exports = mongoose