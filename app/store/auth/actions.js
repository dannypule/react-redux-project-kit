import { push } from 'react-router-redux';
import { toast } from 'react-toastify';
import apiService from '../../services/apiService';
import cookies from '../../services/cookieService';

export const login = ({ email, password, setSubmitting }) => dispatch =>
  apiService
    .post('/auth/login', {
      email,
      password,
    })
    .then(res => {
      console.log(res);
      if (!res.ok) {
        toast.error('Email or password are incorrect.');
        cookies.set('token', '');
        setSubmitting(false);
        return;
      }
      dispatch({ type: 'LOGGED_IN' });
      dispatch(push('/'));
      cookies.set('token', res.data.token);
    })
    .catch(() => {
      toast.error('Failed to login. Please try again.');
      cookies.set('token', '');
      setSubmitting(false);
    });

export const register = ({
  firstName,
  lastName,
  email,
  password,
}) => dispatch =>
  apiService
    .post('/auth/register', {
      firstName,
      lastName,
      email,
      password,
    })
    .then(res => {
      dispatch({ type: 'REGISTER_SUCCESS' });
      dispatch(push('/login'));
      toast.success('Successfully created account. Please login to continue.');
      console.log(res);
      // todo - set cookie for token
    })
    .catch(err => {
      toast.error(err.message);
      console.log(err);
      cookies.set('token', '');
    });

export const logout = () => dispatch => {
  dispatch({ type: 'LOGGED_OUT' });
  dispatch(push('/login'));
  cookies.set('token', '');
};

export const getAuthStatus = () => dispatch => {
  const token = cookies.get('token');
  if (token) {
    dispatch({ type: 'LOGGED_IN' });
  } else {
    logout();
  }
};
