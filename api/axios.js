import axios from "axios";


const api = axios.create({
    // baseURL: "http://sweetcup.store/api",
    baseURL: "http://192.168.177.1:8080/api" //Dũng

<<<<<<< HEAD
    //baseURL: "http://192.168.112.144:8080/api" //Quốc
=======
    // baseURL: "http://192.168.112.144:8080/api",
    baseURL: "http://192.168.11.1:8080/api"
>>>>>>> 249f57f20f84c79217a398ca54763daccbfb63ab
    
})

export default api;