import React, { PropsWithChildren } from 'react'
import cn from 'classnames'

import styles from './Button.module.scss'

export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary',
  Alternative = 'alternative',
}

export enum TypeBtn {
  Button = 'button',
  Submit = 'submit',
  Reset = 'reset',
}

interface ButtonProps {
  onClick?: () => void
  className?: string
  typeBtn?: TypeBtn
  disabled?: boolean
  type?: ButtonType
}

export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  typeBtn,
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
      type={typeBtn}
    >
      {children}
    </button>
  )
}
