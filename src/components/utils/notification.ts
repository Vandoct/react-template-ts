import { notification } from 'antd';
import { ReactNode } from 'react';

interface INotificationProps {
  type?: 'success' | 'info' | 'warning' | 'error';
  title: ReactNode;
  message?: ReactNode;
  placement?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
  duration?: number;
}

export const showNotification = ({
  type = 'info',
  title,
  message,
  placement = 'bottomRight',
  duration = 3,
}: INotificationProps): void => {
  notification[type]({
    message: title,
    description: message,
    placement,
    duration,
  });
};
