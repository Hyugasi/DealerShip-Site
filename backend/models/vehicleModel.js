const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const VehicleSchema = Schema({
    "make": String,
    "model": String,
    "img": String,
    "year": String,
    "price": Number,
    "info": [
        {
            "description": String,
            "condition": String,
            "mileage": Number
        }
    ]
})

const Vehicle = mongoose.model("Vehicle", VehicleSchema)
module.exports = Vehicle