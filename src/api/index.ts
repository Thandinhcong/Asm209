import axios from 'axios'

const instances = axios.create({
    baseURL: import.meta.env.PORT,
})

export default instances