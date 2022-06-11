import api from './axios';
import {urls} from '../urls'
export const tarefeha = {
    async Get() {
        return await api.get(urls.tarefeha)
            .then(res => {
                return res
            }).catch(err => {
                return err
            });


    }
}