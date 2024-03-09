import { IUser } from "../models/IUser";
import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService";
import axios from 'axios';
import { AuthResponse } from "../models/response/AuthResponse";
import { API_URL } from "../http";
import { LocalStorageFields } from "../LocalStorageFields";

export default class Store {
  user = {} as IUser;
  isAuth = false;
  isLoading = false;

  constructor () {
    makeAutoObservable(this);
  }

  setAuth (bool: boolean) {
    this.isAuth = bool;
  }

  setUser (user: IUser) {
    this.user = user;
  }

  setLoading (bool: boolean) {
    this.isLoading = bool;
  }

  async login (email: string, password: string) {
    console.log( 7777 );
    try {
      const response = await AuthService.login(email, password);
      console.log(response)
      localStorage.setItem(LocalStorageFields.AuthToken, response.data.access_token);
      this.setAuth(true);
      if (response.data.user !== undefined) {
        this.setUser(response.data.user);
      }
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  }


  async checkAuth () {
    this.setLoading(true);
    try {
      const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, { withCredentials: true })
      console.log(response);
      localStorage.setItem(LocalStorageFields.AuthToken, response.data.access_token);
      this.setAuth(true);
      if (response.data.user !== undefined) {
        this.setUser(response.data.user);
      }
    } catch (e: any) {
      console.log(e.response?.data?.message);
    } finally {
      this.setLoading(false);
    }
  }
}
