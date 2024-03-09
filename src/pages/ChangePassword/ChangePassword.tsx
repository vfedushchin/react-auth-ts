import React from 'react'
import ChangePasswordForm from './ChangePasswordForm';

import styles from './ChangePassword.module.scss'

const ChangePassword: React.FC = () => {
  return (
    <div className={styles.change_password}>
      <h1>Create new Password?</h1>
      <ChangePasswordForm/>
    </div>
  )
}

export default ChangePassword

