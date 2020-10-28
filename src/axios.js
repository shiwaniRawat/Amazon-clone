import axios from "axios";

const instance= axios.create({
    baseURL:"http://localhost:5001/reference-glass-231005/us-central1/api"//the api
})

export default instance