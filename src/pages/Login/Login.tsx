import React from 'react'
import axios, { AxiosResponse } from 'axios';
import { Response } from '../../http/Response'
import { config } from "../../config/Config";
import LoginForm from './LoginForm';
import { Button, ButtonType } from "../../components/Button/Button";
import { handleError } from "../../api/AxiosService";

import styles from './Login.module.scss'

interface LoginRequest {
  email: string
  password: string
}

interface LoginResponse {
  token: string
}

const Login: React.FC = () => {
  const handleSubmit = async (email: string, password: string) => {
    try {
      const response = await axios.post<Response<LoginResponse>,
        AxiosResponse<Response<LoginResponse>>,
        LoginRequest>(`${config.backendEndpoint}login`, { email, password });
      console.log('Login successful:', response.data);
      const authToken = response.data.data.token
      localStorage.setItem('authToken', authToken)
    } catch (error: any) {
      handleError(error);
    }
  };

  return (
    <div className={styles.login}>
      <h1>Log in to your account</h1>

      <div className={styles.login__options}>
        <Button type={ButtonType.Alternative} onClick={() => {
        }}>
          <img src="/images/icons/google.svg" alt=''/>
          <span>Google</span>
        </Button>

        <Button type={ButtonType.Alternative} onClick={() => {
        }}>
          <img src="/images/icons/github.svg" alt=''/>
          <span>Github</span>
        </Button>
      </div>

      <div className={styles.login__separator}>
        <span>or</span>
      </div>

      <LoginForm onSubmit={handleSubmit}/>
    </div>
  )
}

export default Login

