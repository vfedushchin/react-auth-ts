import React from 'react'
import { BackToHome } from '../../components/BackToHome/BackToHome'

import styles from './Page404.module.scss'

const Page404: React.FC = () => {

  return (
    <div className={styles.page404}>
      <img src="/images/pages/404.svg" alt="404" />
      <p>Page 404</p>
      <BackToHome />
    </div>
  )
}

export default Page404
