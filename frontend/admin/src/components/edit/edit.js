import React, { useState } from 'react'
import { updateVehicle } from '../../services/api-helper'

function Edit(props) {
    const [vehicle, setVehicle] = useState([])
    const [make, setMake] = useState("")
    const [model, setModel] = useState("")
    const [img, setImg] = useState("")
    const [year, setYear] = useState("")
    const [price, setPrice] = useState()
    const [description, setDescription] = useState("")
    const [condition, setCondition] = useState("")
    const [mileage, setMileage] = useState()

    const vehicleEdit = props.vehicles.filter((vehicle, key) => {
        return vehicle._id === props.match.params.id
    })

    const [updateVehicles, setUpdateVehicles] = useState(vehicleEdit[0])
    const handleUpdate = async (e) => {
        e.preventDefault()
        const json = await updateVehicle(
            vehicleEdit[0],
            updateVehicle
        )
        setUpdateVehicles("")
    }

    const handleMakeChange = (e) => {
        setMake(e.target.value)
    }
    const handleModelChange = (e) => {
        setModel(e.target.value)
    }
    const handleImgChange = (e) => {
        setImg(e.target.value)
    }
    const handleYearChange = (e) => {
        setYear(e.target.value)
    }
    const handlePriceChange = (e) => {
        setPrice(e.target.value)
    }
    const handleDescChange = (e) => {
        setDescription(e.target.value)
    }
    const handleCondititonChange = (e) => {
        setCondition(e.target.value)
    }
    const handleMileageChange = (e) => {
        setMileage(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleUpdate} >
                <input type="text" placeholder="Make" value={make} onChange={handleMakeChange} /><br />
                <input type="text" placeholder="model" value={model} onChange={handleModelChange} /><br />
                <input type="text" placeholder="img" value={img} onChange={handleImgChange} /><br />
                <input type="text" placeholder="year" value={year} onChange={handleYearChange} /><br />
                <input type="text" placeholder="price" value={price} onChange={handlePriceChange} /><br />
                <input type="text" placeholder="description" value={description} onChange={handleDescChange} rows="3" /><br />
                <input type="text" placeholder="condition" value={condition} onChange={handleCondititonChange} /><br />
                <input type="text" placeholder="mileage" value={mileage} onChange={handleMileageChange} /><br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Edit