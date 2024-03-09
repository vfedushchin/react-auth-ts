import {IUser} from "../IUser";

export interface AuthResponse {
    timestamp?: string;
    access_token: string;
    refresh_token: string;
    token_expire?: number;
    refresh_token_expire?: number;
    user?: IUser;
}
