import axios from 'axios';
export const users = {
    async Post(BASE_URL, data) {
        const options = {
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Credentials': "true",
                'Access-Control-Allow-Methods':'GET, POST, OPTIONS, PUT, PATCH, DELETE',
                'Access-Control-Allow-Headers':'Origin,Content-Type,X-Requested-With,Accept,Authorization'
            }
          };
        return await axios.post(`${BASE_URL}`, data)
            .then(res => {
                return res
            }).catch(err => {
                return err
            });


    }
}