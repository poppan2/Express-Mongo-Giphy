const mongoose = require('../db/connection')

const gifSchema = new mongoose.Schema({
    name: String,
    url: String
})


module.exports = mongoose.model('Gif', gifSchema)