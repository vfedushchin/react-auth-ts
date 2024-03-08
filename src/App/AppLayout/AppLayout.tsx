import React from 'react'
import { Header } from './Header/Header'
import { AppRoutes } from '../../AppRoutes'

import styles from './AppLayout.module.scss'

export const AppLayout: React.FC = () => {

  return (
    <div className={styles.app_layout}>
      <Header/>
      <div className={styles.app_layout__content}>
        <AppRoutes/>
      </div>
    </div>
  )
}
