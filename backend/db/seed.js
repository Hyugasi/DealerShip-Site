const Vehicle = require('../models/vehicleModel')
const Description = require('../models/descriptionModel')
const mongoose = require('./connection')

Vehicle.deleteMany({}).then(() => {
    console.log("deleted all vehicles")
    Description.deleteMany({}).then(() => {
        console.log('deleted all descriptions')

        Vehicle.create({
            make: "Honda",
            model: "CB500X",
            img: "https://i.imgur.com/B3P2hJ1.jpg",
            year: 2015,
            price: 2500,
        }).then(cb500 => {
            Promise.all([
                Description.create({
                    description: "this is a motorcycle",
                    condition: "Used"
                }).then(description => {
                    cb500.description.push(description)
                    console.log('created cb500 description', cb500, description)
                })
            ]).then(() => {
                cb500.save()
            })
        })
    })
})