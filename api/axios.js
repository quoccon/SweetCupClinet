import axios from "axios";


const api = axios.create({
    baseURL: "https://sweetcup.onrender.com/api",
    
})

export default api;