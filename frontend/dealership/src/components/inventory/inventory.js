import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllVehicles } from '../api-helper'
import './style.css'

function Inventory() {
    const [vehicles, setVehicles] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const makeAPICall = async () => {
            const resp = await getAllVehicles()
            setVehicles(resp)
            setIsLoading(false)
        }
        makeAPICall()
    }, [])

    const vehicleList = vehicles.map((vehicle, key) => {
        return (
            <div key={key} className="vehicles">
                <img src={vehicle.img} />
                <h1>{vehicle.make}</h1>
                <h2>{vehicle.midel}</h2>
                <h3>{vehicle.year}</h3>
                <p>${vehicle.price}</p>
                <Link to={`/info/${vehicle._id}`}>
                    <button>More Info</button>
                </Link>
            </div>
        )
    })

    return (
        <div>
            {vehicleList}
        </div>
    )
}

export default Inventory