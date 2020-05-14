import React, { useState } from 'react'
import { createVehicle } from '../../services/api-helper'

function Create() {
    const [make, setMake] = useState("")
    const [model, setModel] = useState("")
    const [img, setImg] = useState("")
    const [year, setYear] = useState("")
    const [price, setPrice] = useState()
    const [description, setDescription] = useState("")
    const [condition, setCondition] = useState("")
    const [mileage, setMileage] = useState()


    const handleCreate = async (e) => {
        e.preventDefault();
        const json = await createVehicle({
            make: make,
            model: model,
            img: img,
            year: year,
            price: price,
            info: [
                {
                    description: description,
                    condition: condition,
                    mileage: mileage,
                }
            ]
        })
        setMake("")
        setModel("")
        setImg("")
        setYear("")
        setPrice("")
        setDescription("")
        setCondition("")
        setMileage("")
    }
    return (
        <div>This is the Create Page</div>
    )
}

export default Create