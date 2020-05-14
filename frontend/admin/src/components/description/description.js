import React from 'react'
import './style.css'

function Description(props) {

    const vehicleEdit = props.vehicles.filter((vehicle, key) => {
        return vehicle._id === props.match.params.id
    })

    if (vehicleEdit === []) {
        return (<div>Loading...</div>)
    } else {
        return (
            <div>
                <h1>Details</h1>
                <img src={vehicleEdit[0].img} />
                <h1>{vehicleEdit[0].make}</h1>
                <h2>{vehicleEdit[0].model}</h2>
                <p>{vehicleEdit[0].info[0].description}</p>
                <p>Condition: {vehicleEdit[0].info[0].condition}</p>
                <p>Mileage: {vehicleEdit[0].info[0].mileage}</p>
                <button>Delete</button>
                <button>Edit</button>
            </div>

        )
    }
}

export default Description