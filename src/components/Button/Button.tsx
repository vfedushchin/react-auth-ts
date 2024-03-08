import React, { PropsWithChildren } from 'react'
import cn from 'classnames'

import styles from './Button.module.scss'

export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary',
  Alternative = 'alternative',
}

interface ButtonProps {
  onClick: () => void
  className?: string
  disabled?: boolean
  type?: ButtonType
}

export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  onClick,
  disabled,
  type,
}) => {
  return (
    <button
      disabled={disabled}
      className={cn([
        styles.button,
        disabled && styles.button_disabled,
        type === ButtonType.Secondary && styles.button_secondary,
        type === ButtonType.Alternative && styles.button_alternative,
        className,
      ])}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
