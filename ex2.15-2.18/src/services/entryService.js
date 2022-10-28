import axios from 'axios'
const url = 'http://localhost:3001/entries'

const getAll = () => {
    return axios.get(url)
}

const addNew = newEntry => {
    return axios.post(url, newEntry)
}

export default {getAll, addNew}