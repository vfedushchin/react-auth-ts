import React from 'react'
import { BackToHome } from '../../components/BackToHome/BackToHome'

import styles from './ComingSoon.module.scss'

const ComingSoon: React.FC = () => {

  return (
    <div className={styles.coming_soon}>
      <img src="/images/pages/coming-soon.svg" alt="Coming Soon" />
      <p>Coming Soon</p>
      <BackToHome />
    </div>
  )
}

export default ComingSoon
