import React from 'react'
import { notification } from 'antd'

import './AntdNotificationOverriden.scss'

export enum NotificationType {
  Info = 'info',
  Error = 'error',
  Success = 'success',
}

interface NotificationProps {
  title?: string
  message?: string
  type?: NotificationType
}

notification.config({
  placement: 'topRight',
  top: 20,
  duration: 5,
  maxCount: 3,
})

const NotificationIcon = (type?: NotificationType): React.ReactNode => {
  let icon = 'info'
  switch (type) {
    case NotificationType.Error:
      icon = 'error'
      break
    case NotificationType.Success:
      icon = 'success'
      break
  }
  return <img src={`/images/icons/${icon}.svg`}  alt=''/>
}

export const notify = ({ title, message, type }: NotificationProps): void => {
  const currentType = type || NotificationType.Info

  notification.open({
    message: title || '',
    description: message || '',
    className: currentType,
    icon: NotificationIcon(currentType),
    closeIcon: <img src="/images/icons/close.svg"  alt=''/>,
  })
}
