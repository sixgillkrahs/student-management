import { FACULTY_API } from './api'

interface reqdata {
    code :String,
    name :String
}

const getAll = async () => {
    let res = await FACULTY_API.get("/",{timeout:3000})
    return res.data
}

const create = async (data: reqdata) => {
    let res = await FACULTY_API.post("/",data,{timeout:30000})
    return res.data
}

const update = async (data :reqdata ,_id : string ) => {
    let res = await FACULTY_API.put(`/${_id}`,data,{timeout:30000})
    return res.data
}

const deleteApi = async (_id : string) => {
    let res = await FACULTY_API.delete(`/${_id}`,{timeout:30000})
    return res.data
}

const get = async (_id :string) => {
    let res = await FACULTY_API.get(`/${_id}`,{timeout:30000})
    return res
}


export {
    getAll,
    create,
    update,
    deleteApi,
    get
}