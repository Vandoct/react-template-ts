import { ReactNode } from 'react';
import { toast } from 'react-toastify';
import { generateUID } from './helper';

export const showError = (error: string): ReactNode => {
  return toast.error(error, {
    toastId: generateUID(),
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });
};

export const clearQueue = (): void => {
  toast.clearWaitingQueue();
};
