import React from 'react'
import ForgotForm from './ForgotForm';

import styles from './Forgot.module.scss'

const Forgot: React.FC = () => {
  return (
    <div className={styles.forgot}>
      <h1>Forgot Password?</h1>
      <ForgotForm/>
    </div>
  )
}

export default Forgot
