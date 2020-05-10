const express = require('express')
const router = express.Router()
const vehicleController = require("../controllers/vehicleController")

router.get('/', vehicleController.getAllVehicles)
router.get('/:id', vehicleController.getVehiclesById)
router.get('/', vehicleController.createVehicle)
router.get('/:id', vehicleController.updateVehicle)
router.get('/:id', vehicleController.deleteVehicle)

module.exports = router