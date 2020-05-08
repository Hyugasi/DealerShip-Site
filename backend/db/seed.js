const Vehicle = require('../models/vehicleModel')
const Description = require('../models/descriptionModel')
const mongoose = require('./connection')

Vehicle.deleteMany({}).then(() => {
    console.log("deleted all items")

})