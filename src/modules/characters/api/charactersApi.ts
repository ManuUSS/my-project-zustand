import axios from "axios";

// <--- Defines a base axios instance --->
const charactersApi = axios.create({ 
    baseURL: "http://localhost:3100",
})

export { charactersApi }