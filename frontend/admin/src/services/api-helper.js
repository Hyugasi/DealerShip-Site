import axios from 'axios'

const api = axios.create({
    baseURL: "https://dealership-api-ricky-auto.herokuapp.com/"
})

export const getAllVehicles = async () => {
    const resp = await api.get("/vehicles")
    return resp.data
}

export const deleteVehicle = async (id) => {
    const resp = await api.delete(`/vehicles/${id}`)
    return resp.data
}

export const updateVehicle = async (id, vehicles) => {
    const resp = await api.put(`/vehicles/${id}`, vehicles)
    return resp.data
}

export const createVehicle = async (vehicle) => {
    const resp = await api.post('/vehicles', vehicle)
    return resp.data
}