import axios from 'axios';
export const tarefeha = {
    async Get(BASE_URL) {
        return await axios.get(`${BASE_URL}`)
            .then(res => {
                return res
            }).catch(err => {
                return err
            });


    }
}