const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const DescriptionSchema = Schema({
    "description": String,
    "condition": String,
})

const Description = mongoose.Schema('Description', DescriptionSchema)
module.exports = Description