import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { deleteVehicle } from '../../services/api-helper'

function Description(props) {
    const [vehicles, setVehicles] = useState([])
    const [vehicleData, setVehicleData] = useState([])

    console.log("props", props)
    const vehicleEdit = props.vehicles.filter((vehicle, key) => {
        return vehicle._id === props.match.params.id
    })

    const refreshPage = () => {
        window.location.reload()
    }

    const handleDelete = async (id) => {
        const json = await deleteVehicle(id)
        console.log("handleDelete", json)
        const vehicleArr = vehicles.filter((vehicle) => vehicle._id !== id)
        setVehicles(vehicleArr)
        refreshPage()
    }


    const handleEdit = async (event) => {
        console.log(vehicleEdit[0])
    }

    return (
        <div>
            <h1>Details</h1>
            <img src={vehicleEdit[0].img} />
            <h1>{vehicleEdit[0].make}</h1>
            <h2>{vehicleEdit[0].model}</h2>
            <p>{vehicleEdit[0].info[0].description}</p>
            <p>Condition: {vehicleEdit[0].info[0].condition}</p>
            <p>Mileage: {vehicleEdit[0].info[0].mileage}</p>
            <p>Price: ${vehicleEdit[0].price}</p>
            <Link to="/manage">
                <button onClick={() => handleDelete(vehicleEdit[0]._id)}>Delete</button>
            </Link>
            <Link to={`/description/${vehicleEdit[0]._id}/edit`}>
                <button onClick={handleEdit}>Edit</button>
            </Link>

        </div>
    )
}

export default Description