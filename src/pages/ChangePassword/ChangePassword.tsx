import React from 'react'
import axios, { AxiosResponse } from 'axios';
import { Response } from '../../http/Response'
import { config } from "../../config/Config";
import ChangePasswordForm from './ChangePasswordForm';
import { handleError } from "../../api/AxiosService";

import styles from './ChangePassword.module.scss'

interface ChangePasswordRequest {
  token: string
  secret: string
  password: string
  password_confirm: string
}

interface ChangePasswordResponse {
  token: string
}

const ChangePassword: React.FC = () => {

  const handleSubmit = async (password: string, password_confirm: string) => {
    try {
      const response = await axios.post<Response<ChangePasswordResponse>,
        AxiosResponse<Response<ChangePasswordResponse>>,
        ChangePasswordRequest>(`${config.backendEndpoint}password-set`,
        { password, password_confirm, token: localStorage.getItem('authToken') || '', secret: '' });
      console.log('Change password successful:', response.data);
    } catch (error: any) {
      handleError(error);
    }
  };

  return (
    <div className={styles.change_password}>
      <h1>Create new Password?</h1>
      <ChangePasswordForm onSubmit={handleSubmit}/>
    </div>
  )
}

export default ChangePassword

