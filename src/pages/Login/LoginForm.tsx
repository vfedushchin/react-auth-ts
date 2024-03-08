import React, { useState } from 'react';
import { TextInput } from "../../components/TextInput/TextInput";
import { Button, TypeBtn } from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

import styles from './Login.module.scss'
import { AppPath } from "../../AppPath";
import { validateEmail } from "../../utils/Validations";

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleForgotPass = () => {
    navigate(`/${AppPath.Forgot}`)
  };

  const handleSignup = () => {
    navigate(`/${AppPath.ComingSoon}`)
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailError('');
    onSubmit(email, password);
  };

  const checkEmailValidation = () => {
    if (!validateEmail(email)) {
      setEmailError('Invalid email');
      return;
    } else {
      setEmailError('');
    }
  };


  return (
    <form onSubmit={handleSubmit} className={styles.login__form} id="loginForm">
      <TextInput
        placeholder='Work email'
        value={email}
        error={emailError}
        onBlur={checkEmailValidation}
        onChange={setEmail}/>

      {validateEmail(email) &&
        <TextInput
          placeholder={'password'}
          value={password}
          asPassword
          onChange={setPassword}/>
      }

      <div className={styles.login__form_forgot}>
        <button type={'button'} className={'btn-inline'} onClick={handleForgotPass}>Forgot your password?</button>
      </div>

      <Button typeBtn={TypeBtn.Submit}
              className={styles.btn}
              disabled={!validateEmail(email) || password.length === 0}>
        Log in to Qencode
      </Button>


      <p>Is your company new to Qencode? <button type={'button'} className={'btn-inline'} onClick={handleSignup}>Sign up</button></p>
    </form>
  );
};

export default LoginForm;
