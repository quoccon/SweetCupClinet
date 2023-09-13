import axios from "axios";


const api = axios.create({
    baseURL: "https://sweetcup.store/api",
    
})

export default api;