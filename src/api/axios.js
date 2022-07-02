import axios from 'axios'
import { BASE_URL } from '@/src/config/url.config'
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL,
  // headers:{
  //     'Access-Control-Allow-Origin':'*'
  // }
})

export default api
