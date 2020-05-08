const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const VehicleSchema = Schema({
    "make": String,
    "model": String,
    "year": String,
    "price": Number,
    description: [
        {
            ref: "Description",
            type: Schema.Types.ObjectId
        }
    ]
})

const Vehicle = mongoose.model("Vehicle", VehicleSchema)
module.exports = Vehicle