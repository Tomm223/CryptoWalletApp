import axios, { AxiosError } from 'axios';
import cookie from 'js-cookie'
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { StoreContext } from '@/pages/_app';

export const API_URL = 'https://crypto-wallet-server.vercel.app' //`https://crypto-wallet-server-one.herokuapp.com`



const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})


export const Intercaptors = ({ children }) => {

    const router = useRouter()
    const { main } = useContext(StoreContext)

    $api.interceptors.request.use((config) => {
        config.headers.Authorization = `Bearer ${cookie.get('token')}`
        return config;
    })

    $api.interceptors.response.use((config) => {

        return config

    }, async (error) => {
        const status = error.response ? error.response.status : null
        const originalRequest = error.config;
        console.log(error);
        if (status == 403 && error.config && !error.config._isRetry) {
            originalRequest._isRetry = true;
            try {
                cookie.remove('token');
                const response = await axios.get(`${API_URL}/auth/refresh`, { withCredentials: true })
                cookie.set('token', response.data.token);
                return $api.request(originalRequest);
            } catch (e) {
                main.pushErrors('Истекло время токена, авторизутесь для дальнейшей работы')
            }
        }
        throw error;
    })

    return children
}
/*
$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${cookie.get('token')}`
    return config;
})

$api.interceptors.response.use((config) => {

    return config

}, async (error) => {
    const status = error.response ? error.response.status : null
    const originalRequest = error.config;
    console.log(error);
    if (status == 403 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            cookie.remove('token');
            const response = await axios.get(`${API_URL}/auth/refresh`, { withCredentials: true })
            cookie.set('token', response.data.token);
            return $api.request(originalRequest);
        } catch (e) {
            console.log('НЕ АВТОРИЗОВАН')
        }
    }
    throw error;
})
*/
export default $api;

