import axios from "axios";


const api = axios.create({
    baseURL: "http://sweetcup.store/api",
    
})

export default api;