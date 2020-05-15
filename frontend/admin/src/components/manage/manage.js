import React, { useState, useEffect } from 'react'
import './style.css'
import { Link, Redirect } from 'react-router-dom'
import { getAllVehicles } from '../../services/api-helper'

function Manage() {
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

    const listVehicles = vehicles.map((vehicle, key) => {
        return (
            <div key={key} className='vehicles'>
                <img src={vehicle.img} />
                <main>
                    <h2>{vehicle.make}</h2>
                    <h3>{vehicle.model}</h3>
                    <p>{vehicle.year}</p>
                    <p>${vehicle.price}</p>
                    <Link to={`/description/${vehicle._id}`}>
                        <button>Edit/Delete</button>
                    </Link>
                </main>
            </div>
        )
    })

    return (
        <div>
            <div className="button">
                <Link to="/create">
                    <button>Create</button>
                </Link>
            </div>
            {listVehicles}
        </div>
    )
}

export default Manage