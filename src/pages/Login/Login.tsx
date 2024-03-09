import React from 'react'
import LoginForm from './LoginForm';
import { Button, ButtonType } from "../../components/Button/Button";

import styles from './Login.module.scss'

const Login: React.FC = () => {
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

      <LoginForm/>
    </div>
  )
}

export default Login

