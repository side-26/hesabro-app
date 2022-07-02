import axios from 'axios';
import {BASE_URL} from '@/src/config/url.config'
const api = axios.create({
    baseURL: BASE_URL,
    // headers:{
    //     'Access-Control-Allow-Origin':'*'
    // }
    
})

export default api