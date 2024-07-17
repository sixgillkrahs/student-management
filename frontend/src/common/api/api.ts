import axios from 'axios'

const API = axios.create({
    baseURL:"http://localhost:4040/api/",
    timeout:5000
})

const USER_API = axios.create({
    baseURL:"http://localhost:4040/api/users/"
})

const FACULTY_API = axios.create({
    baseURL:"http://localhost:4040/api/faculty/"
})

export {
    USER_API,
    FACULTY_API
}

export default API