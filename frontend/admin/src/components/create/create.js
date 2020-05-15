import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { createVehicle } from '../../services/api-helper'
import './create.css'

function Create() {
    const [make, setMake] = useState("")
    const [model, setModel] = useState("")
    const [img, setImg] = useState("")
    const [year, setYear] = useState("")
    const [price, setPrice] = useState(undefined)
    const [description, setDescription] = useState("")
    const [condition, setCondition] = useState("")
    const [mileage, setMileage] = useState(undefined)


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
            <h1>Add a Vehicle</h1>
            <form onSubmit={handleCreate} >
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
            <Link to="/manage">
                <button>Go back to home</button>
            </Link>
        </div >
    )
}

export default Create