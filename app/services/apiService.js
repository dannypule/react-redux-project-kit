import axios from 'axios';
import { toast } from 'react-toastify';
import { API_ROOT } from './apiConfig';
import cookies from './cookieService';

const handleCatch = err => {
  toast.error('Something went wrong. Please try again.');
  if (err && err.response && err.response.data && err.response.data.error) {
    throw err.response.data;
  } else {
    throw err;
  }
};

const instance = axios.create({
  baseURL: API_ROOT,
  timeout: 5000,
});

const apiService = {};

apiService.get = url =>
  instance
    .get(url, { headers: { Authorization: cookies.get('token') } })
    .then(res => res.data)
    .catch(handleCatch);

apiService.post = (url, data = {}) =>
  instance
    .post(url, data, { headers: { Authorization: cookies.get('token') } })
    .then(res => res.data)
    .catch(handleCatch);

apiService.put = (url, data = {}) =>
  instance
    .put(url, data, { headers: { Authorization: cookies.get('token') } })
    .then(res => res.data)
    .catch(handleCatch);

apiService.del = (url, data = {}) =>
  instance
    .delete(url, data, { headers: { Authorization: cookies.get('token') } })
    .then(res => res.data)
    .catch(handleCatch);

export default apiService;
