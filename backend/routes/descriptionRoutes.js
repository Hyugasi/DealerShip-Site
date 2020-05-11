const express = require('express')
const router = express.Router()
const descriptionController = require('../controllers/descriptionController')

router.get('/', descriptionController.getAllDescriptions)
router.get('/:id', descriptionController.getDescriptionById)
router.put('/:id', descriptionController.updateDescription)
router.post('/', descriptionController.createDescription)
router.delete('/:id', descriptionController.deleteDescription)

module.exports = router