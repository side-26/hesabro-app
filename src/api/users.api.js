import api from './axios';
import {urls} from '../urls';
export const users = {
    async Post(data) {
        const options = {
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Credentials': "true",
                'Access-Control-Allow-Methods':'GET, POST, OPTIONS, PUT, PATCH, DELETE',
                'Access-Control-Allow-Headers':'Origin,Content-Type,X-Requested-With,Accept,Authorization'
            }
          };
        return await api.post(urls.tarefeha, data)
            .then(res => {
                return res
            }).catch(err => {
                return err
            });


    }
}