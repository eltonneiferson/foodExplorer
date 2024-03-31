import axios from "axios"

export const api = axios.create({
    baseURL: "https://foodexplorer-backend-bu4a.onrender.com"
})