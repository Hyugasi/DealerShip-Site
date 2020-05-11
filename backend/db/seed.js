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

        Vehicle.create({
            make: "Honda",
            model: "Civic",
            img: "https://di-uploads-pod12.dealerinspire.com/driversautomart/uploads/2019/12/pasted-image-0.png",
            year: 2018,
            price: 15000,
        }).then(civic => {
            Promise.all([
                Description.create({
                    description: "this is a honda civic in good condition",
                    condition: "Used"
                }).then(description => {
                    civic.description.push(description)
                    console.log('created honda civic', civic, description)
                })
            ]).then(() => {
                civic.save()
            })
        })
    })
})