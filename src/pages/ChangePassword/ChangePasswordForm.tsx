import React, { useContext, useState } from 'react';
import { TextInput } from "../../components/TextInput/TextInput";
import { Button } from "../../components/Button/Button";
import { validatePassword } from "../../utils/Validations";
import { Context } from "../../App/App";
import { observer } from "mobx-react-lite";
import { LocalStorageFields } from "../../LocalStorageFields";


const ChangePasswordForm: React.FC = () => {
  const { store } = useContext(Context);
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordConfirmError, setPasswordConfirmError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPasswordError('');
    store.changePassword(password, passwordConfirm, LocalStorageFields.AuthToken || '', '')
  };

  const checkPasswordValidation = (newValue: string) => {
    if (!validatePassword(newValue)) {
      setPasswordError('Password is not strong. Should be at least 8 characters long, contain at least one numeric, one uppercase letter and one lowercase letter');
      return;
    } else {
      setPasswordError('');
    }
  };

  const checkPasswordConfirmValidation = (newValue: string) => {
    if (newValue !== password) {
      setPasswordConfirmError('Passwords must be the same');
      return;
    } else {
      setPasswordConfirmError('');
    }
  };

  const handlePasswordChange = (newValue: string) => {
    setPassword(newValue);
    checkPasswordValidation(newValue)
  };

  const handlePasswordConfirmChange = (newValue: string) => {
    setPasswordConfirm(newValue);
    checkPasswordConfirmValidation(newValue)
  };


  return (
    <form onSubmit={handleSubmit} id="changePasswordForm">
      <TextInput
        label={'Password'}
        placeholder={'password'}
        value={password}
        error={passwordError}
        asPassword
        onChange={(value) => {
          handlePasswordChange(value);
        }}/>

      <TextInput
        label={'Confirm Password'}
        error={passwordConfirmError}
        placeholder={'password'}
        value={passwordConfirm}
        asPassword
        onChange={(value) => {
          handlePasswordConfirmChange(value);
        }}/>

      <Button disabled={!validatePassword(password) || passwordConfirm !== password} onClick={() => {
      }}>Reset Password</Button>
    </form>
  );
};

export default observer(ChangePasswordForm);
