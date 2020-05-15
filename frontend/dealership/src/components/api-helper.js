import axios from 'axios'

const api = axios.create({
    baseURL: "https://dealership-api-ricky-auto.herokuapp.com"
})

export const getAllVehicles = async () => {
    const resp = await api.get("/vehicles")
    return resp.data
}