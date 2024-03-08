import React, { useState } from 'react';
import { TextInput } from "../../components/TextInput/TextInput";
import { Button, ButtonType, TypeBtn } from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

import styles from './Forgot.module.scss'
import { validateEmail } from "../../utils/Validations";

interface LoginFormProps {
  onSubmit: (email: string) => void;
}

const ForgotForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    checkEmailValidation()
    setEmailError('');
    onSubmit(email);
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


      <Button typeBtn={TypeBtn.Submit} className={styles.btn} disabled={!validateEmail(email)} >
        Send
      </Button>

      <Button typeBtn={TypeBtn.Button} type={ButtonType.Alternative} onClick={() => navigate('/')}>
        Cancel
      </Button>
    </form>
  );
};

export default ForgotForm;
