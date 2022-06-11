import axios from 'axios';
import {BASE_URL} from '@/config/url.config'
const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Credentials': "true",
        'Access-Control-Allow-Methods':'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        'Access-Control-Allow-Headers':'Origin,Content-Type,X-Requested-With,Accept,Authorization'
    }
})

export default api