import React from 'react'
import axios, { AxiosResponse } from 'axios';
import { Response } from '../../http/Response'
import { config } from "../../config/Config";
import ForgotForm from './ForgotForm';
import { handleError } from "../../api/AxiosService";

import styles from './Forgot.module.scss'
import { AppPath } from "../../AppPath";
import { useNavigate } from "react-router-dom";

interface ForgotRequest {
  email: string
  redirect_url: string
}

interface ForgotResponse {
  token: string
}

const Forgot: React.FC = () => {
  const navigate = useNavigate()

  const handleSubmit = async (email: string) => {
    try {
      const response = await axios.post<Response<ForgotResponse>,
        AxiosResponse<Response<ForgotResponse>>,
        ForgotRequest>(`${config.backendEndpoint}password-reset`, { email, redirect_url: 'https://auth-qa.qencode.com/password-set' });
      console.log('Forgot successful:', response.data);
      navigate(`/${AppPath.ChangePassword}`)
    } catch (error: any) {
      handleError(error);
      navigate(`/${AppPath.ChangePassword}`)
    }
  };

  return (
    <div className={styles.forgot}>
      <h1>Forgot Password?</h1>
      <ForgotForm onSubmit={handleSubmit}/>
    </div>
  )
}

export default Forgot

