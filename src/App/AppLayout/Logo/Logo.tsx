import React from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'

import styles from './Logo.module.scss'

interface LogoProps {
  className?: string
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link className={cn(styles.logo, className)} to="/">
      <div className={styles.logo__content}>
        <img src="/images/logo.svg" alt="Qencode" />
      </div>
    </Link>
  )
}
