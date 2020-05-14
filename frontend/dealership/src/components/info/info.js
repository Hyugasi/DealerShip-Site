import React, { useState } from 'react'

function Info(props) {
    const [vehicles, setVehicles] = useState([])

    // const vehicleDisplay = props.vehicles.filter((vehicle, key) => {
    //     return vehicle._id === props.match.params.id
    // })
    console.log('vehicle props', props.vehicles)
    return (
        <div>
            {/* <img src={vehicleDisplay[0].img} /> */}
            this is dumb
        </div>
    )
}
export default Info