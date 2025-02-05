import axios from "axios"
const baseUrl = "http://localhost:3001/persons"

const create = (newPerson) => {
    console.log("create called");

    const req = axios.post(baseUrl, newPerson)
    return req.then(res => res.data)
}

const getAll = () => {
    const req = axios.get(baseUrl)
    return req.then(res => res.data)
}

const deletePerson = (id) => {
    const req = axios.delete(`${baseUrl}/${id}`)
    return req.then(res => res.data);
}

const updatePerson = (id, person) => {
    const req = axios.put(`${baseUrl}/${id}`, person)
    return req.then(res => res.data)
}

export default {
    create,
    getAll,
    deletePerson,
    updatePerson

}