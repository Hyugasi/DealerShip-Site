const Vehicle = require('../models/vehicleModel')

const getAllVehicles = (req, res) => {
    Vehicle.find({}).then(vehicles => {
        res.json(vehicles)
    })
}

const getVehiclesById = (req, res) => {
    Vehicle.findById(req.params.id).then(vehicle => {
        res.json(vehicle)
    })
}

const createVehicle = (req, res) => {
    Vehicle.create(req.body).then(vehicle => {
        res.json(vehicle)
    })
}

const updateVehicle = (req, res) => {
    Vehicle.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(vehicle => {
        res.json(vehicle)
    })
}

const deleteVehicle = (req, res) => {
    Vehicle.findByIdAndDelete(req.params.id).then(vehicle => {
        res.json({
            "status": "success",
            "msg": "item deleted"
        })
    })
}

module.exports = {
    getAllVehicles,
    getVehiclesById,
    createVehicle,
    updateVehicle,
    deleteVehicle
}