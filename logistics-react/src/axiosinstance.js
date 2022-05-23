import axios from "axios";

//Change URL accordingly
const instance = axios.create({
    baseURL: 'https://logistics-inventory-crud.fehamismail.repl.co/'
})

export default instance