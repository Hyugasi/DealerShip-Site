const Vehicle = require('../models/vehicleModel')
// const Description = require('../models/descriptionModel')
const mongoose = require('./connection')

Vehicle.deleteMany({}).then(() => {
    console.log("deleted all vehicles")

    Vehicle.create({
        make: "Honda",
        model: "CB500X",
        img: "https://i.imgur.com/B3P2hJ1.jpg",
        year: 2015,
        price: 2500,
        info: [
            {
                description: "This is a motorcycle",
                condition: "Used",
                mileage: 3500
            }
        ]
    }).then(cb500 => {
        Promise.all([
        ]).then(() => {
            cb500.save()
            console.log('created cb500')
        })
    })
})