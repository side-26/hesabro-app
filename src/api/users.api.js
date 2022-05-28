import axios from 'axios';
export const users = {
    async Post(BASE_URL, data) {
        return await axios.post(`${BASE_URL}`, data)
            .then(res => {
                return res
            }).catch(err => {
                return err
            });


    }
}