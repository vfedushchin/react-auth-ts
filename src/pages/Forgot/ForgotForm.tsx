import React, { useContext, useState } from 'react';
import { TextInput } from "../../components/TextInput/TextInput";
import { Button, ButtonType, TypeBtn } from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

import styles from './Forgot.module.scss'
import { validateEmail } from "../../utils/Validations";
import { Context } from "../../App/App";
import { observer } from "mobx-react-lite";
import { AppPath } from "../../AppPath";


const ForgotForm: React.FC = () => {
  const { store } = useContext(Context);
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    checkEmailValidation()
    setEmailError('');
    store.forgotPassword(email, 'https://auth-qa.qencode.com/password-set').then(
      () => navigate(`/${AppPath.ChangePassword}`))
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
    <form onSubmit={handleSubmit} className={styles.login__form}>
      <TextInput
        placeholder='Enter your email'
        value={email}
        error={emailError}
        onBlur={checkEmailValidation}
        onChange={setEmail}/>


      <Button typeBtn={TypeBtn.Submit} className={styles.btn} disabled={!validateEmail(email)}>
        Send
      </Button>

      <Button typeBtn={TypeBtn.Button} type={ButtonType.Alternative} onClick={() => navigate('/')}>
        Cancel
      </Button>
    </form>
  );
};

export default observer(ForgotForm);
