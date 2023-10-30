import axios from "axios";


const api = axios.create({
    baseURL: "http://sweetcup.store/api",
    // baseURL: "http://192.168.177.1:8080/api"

    // baseURL: "http://192.168.112.144:8080/api"
    
})

export default api;