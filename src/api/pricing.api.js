import api from './axios';
import {urls} from '../urls'
export const pricing = {
    async get() {
        return await api.get(urls.pricing)
            .then(res => {
                return res
            }).catch(err => {
                // return err
            });


    }
}