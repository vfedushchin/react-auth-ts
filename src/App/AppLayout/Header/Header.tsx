import React from 'react'
import { Logo } from '../Logo/Logo'


import styles from './Header.module.scss'

export const Header: React.FC = () => {

  return (
    <div className={styles.header}>
      <div className={styles.header__container}>
        <Logo className={styles.header__logo} />
      </div>
    </div>
  )
}
