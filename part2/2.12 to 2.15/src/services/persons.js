import axios from "axios"
const baseUrl = "http://localhost:3001/persons"

const create = (newPerson) => {
    const req = axios.post(baseUrl, newPerson)
    return req.then(res => res.data)
}

const getAll = () => {
    const req = axios.get(baseUrl)
    return req.then(res => res.data)
}

export default {
    getAll,
    create
}