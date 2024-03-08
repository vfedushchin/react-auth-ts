import React, { useCallback, useState } from 'react'
import cn from 'classnames'

import styles from './TextInput.module.scss'

interface TextInputProps {
  className?: string
  label?: string
  error?: string | null
  value?: string
  placeholder?: string
  maxLength?: number
  disabled?: boolean
  asPassword?: boolean
  onChange?: (value: string) => void
  onBlur?: () => void
}

export const TextInput: React.FC<TextInputProps> = ({
  className,
  label,
  value,
  error,
  placeholder,
  maxLength,
  disabled = false,
  asPassword,
  onChange,
  onBlur
}) => {

  const [passwordType, setPasswordType] = useState<boolean>(asPassword || false);
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value || '')
    },
    [onChange]
  )

  return (
    <div className={cn(styles.field, className, error && styles.field_error)}>
      {label && <div className={styles.field__label}>{label}</div>}
      <div className={styles.field__wrap}>
        <input
          maxLength={maxLength}
          className={styles.field__input}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          disabled={disabled}
          onBlur={onBlur}
          type={(asPassword && passwordType) ? 'password' : 'text'}
        />

        {asPassword &&
          <div  className={cn(styles.field__icon, passwordType && styles.pass_show)} onClick={()=>setPasswordType(!passwordType)}>
            <img src="/images/icons/eye.svg" alt="" />
          </div>
        }

        {error && <div className={styles.field__error}>{error}</div>}
      </div>
    </div>
  )
}
