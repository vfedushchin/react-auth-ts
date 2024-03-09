import $api from "../http";
import {AxiosResponse} from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/login', {email, password})
    }


    static async forgotPassword(email: string, redirect_url: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/password-reset', {email, redirect_url})
    }

    static async changePassword(password: string, password_confirm: string, token: string, secret: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/password-set', {password, password_confirm, token, secret})
    }

}

