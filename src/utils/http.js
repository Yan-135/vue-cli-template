import axios from 'axios';
import router from '@/router';
import { Message } from 'element-ui';
import { getLoginToLocal, setLoginToLocal } from '@/utils/local';

// axios 使用说明:https://www.kancloud.cn/yunye/axios/234845
// create an axios instance
const service = axios.create({
    baseURL: '',
    timeout: 20000 // request timeout
})

// token
service.defaults.headers['Authorization'] = getLoginToLocal();

service.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        const res = error.response.data;
        if (res.status == 401) {
            if (getLoginToLocal()) {
                setLoginToLocal('');
                router.push({
                    name: "user-login"
                })
            }
        } else if (res.status == 402) {
            router.push({
                name: "developer-register"
            })
        } else {
            Message({
                message: res.message,
                type: 'error',
                center: true,
                duration: 5 * 1000
            });
        }
        return Promise.reject(error)
    }
);

export default service;