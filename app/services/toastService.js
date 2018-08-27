import { toast } from 'react-toastify';

const options = {
  position: toast.POSITION.BOTTOM_RIGHT,
};
const defaultTimeout = 3000;

export default {
  info: (msg, timeout = defaultTimeout) =>
    toast.info(msg, { ...options, autoClose: timeout }),

  warning: (msg, timeout = defaultTimeout) =>
    toast.warning(msg, { ...options, autoClose: timeout }),

  success: (msg, timeout = defaultTimeout) =>
    toast.success(msg, { ...options, autoClose: timeout }),

  error: (msg, timeout = defaultTimeout) =>
    toast.error(msg, { ...options, autoClose: timeout }),
};
