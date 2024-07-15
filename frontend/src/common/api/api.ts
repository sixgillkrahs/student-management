import axios from 'axios'

const API = axios.create({
    baseURL:"http://localhost:4040/api/",
    timeout:5000
})

const USER_API = axios.create({
    baseURL:"http://localhost:4040/api/users/"
})

export {
    USER_API
}

export default API