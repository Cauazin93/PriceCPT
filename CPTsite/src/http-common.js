import Axios from 'axios';

const createAxios = Axios.create({
    baseURL: "https://localhost:7180"
})

export default createAxios;