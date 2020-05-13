// const Description = require('../models/descriptionModel')

// const getAllDescriptions = (req, res) => {
//     Description.find({}).then(desc => {
//         res.json(desc)
//         console.log('getting the description')
//     })
// }

// const getDescriptionById = (req, res) => {
//     Description.findById(req.params.id).then(desc => {
//         res.json(desc)
//     })
// }

// const createDescription = (req, res) => {
//     Description.create(req.body).then(desc => {
//         res.json(desc)
//     })
// }

// const updateDescription = (req, res) => {
//     Description.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(desc => {
//         res.json(desc)
//     })
// }

// const deleteDescription = (req, res) => {
//     Description.findByIdAndDelete(req.params.id).then(() => {
//         res.json({
//             "status": "success",
//             "msg": "description deleted"
//         })
//     })
// }

// module.exports = {
//     getAllDescriptions,
//     getDescriptionById,
//     createDescription,
//     updateDescription,
//     deleteDescription
// }