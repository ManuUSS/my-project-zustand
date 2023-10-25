import axios from "axios";


const charactersApi = axios.create({ 
    baseURL: "http://localhost:3100",
})

export { charactersApi }