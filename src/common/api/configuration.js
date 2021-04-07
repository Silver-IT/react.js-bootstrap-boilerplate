import axios from 'axios';
import AuthAPI from './auth';

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    const url = config.url;
    if (url.includes('admin') || url.includes('client') || url.includes('profile')) {
        const at = AuthAPI.getAccessToken();
        config.headers.Authorization = `bearer ${at}`;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // console.log('Response Interceptor:', response)
    return response.data;
}, function (error) {
    return Promise.reject(error);
});