import axios from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";
import { config } from "../config/Config";
import { LocalStorageFields } from "../LocalStorageFields";

export const API_URL = config.backendEndpoint

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

/*$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem(LocalStorageFields.AuthToken)}`
    return config;
})*/

$api.interceptors.response.use((config) => {
    return config;
},async (error) => {
    const originalRequest = error.config;
    if (error.response.status == 422 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/access-token`, {withCredentials: true})
            localStorage.setItem(LocalStorageFields.AuthToken, response.data.access_token);
            return $api.request(originalRequest);
        } catch (e) {
            console.log('Not Authorized')
        }
    }
    throw error;
})

export default $api;
