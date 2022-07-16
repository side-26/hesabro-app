import axios from 'axios'
const api = axios.create({
  baseURL: import.meta.env.PROD ? 'https://hesabro.com' : import.meta.env.VITE_API_BASEURL,
})
// api.interceptors.response.use(config => {
//   console.log(config);
//   return config
// })
export default api
