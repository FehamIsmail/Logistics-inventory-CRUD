import axios from "axios";

//Change URL accordingly
const instance = axios.create({
    //localhost
    baseURL: 'http://localhost:5000'
    //Replit
    // baseURL: 'https://Logistics-inventory-CRUD.fehamismail.repl.co/'
})

export default instance