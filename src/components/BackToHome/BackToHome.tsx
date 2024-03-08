import React from 'react'
import cn from 'classnames'
import { Button } from '../Button/Button'
import { useNavigate } from 'react-router-dom'

import styles from './BackToHome.module.scss'

interface BackToHomeProps {
  className?: string
}

export const BackToHome: React.FC<BackToHomeProps> = ({ className }) => {
  const navigate = useNavigate()

  return (
    <Button className={cn(styles.btn, className)} onClick={() => navigate('/')}>
      Back to Main Page
    </Button>
  )
}
