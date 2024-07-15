import API, {USER_API} from './api'

interface loginRes {
    username :String,
    password:String
}

const login = async (data : loginRes) => {
    try {
        let res = await USER_API.post("/login",data,{timeout:5000});
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export {
    login
}