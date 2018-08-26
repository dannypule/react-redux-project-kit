import { push } from 'react-router-redux';
import { toast } from 'react-toastify';
import apiService from '../../services/apiService';
import cookies from '../../services/cookieService';

export const login = ({ email, password, formikActions }) => dispatch =>
  apiService
    .post('/auth/login', {
      email,
      password,
    })
    .then(res => {
      console.log(res);
      if (!res.ok) {
        toast.error(res.message, 5000);
        cookies.set('token', '');
        formikActions.setSubmitting(false);
        return;
      }
      cookies.set('token', res.data.token);
      dispatch({ type: 'LOGGED_IN' });
      dispatch(push('/'));
    })
    .catch(() => {
      toast.error('Failed to login. Please try again.');
      cookies.set('token', '');
      formikActions.setSubmitting(false);
    });

export const register = ({
  firstName,
  lastName,
  email,
  password,
  formikActions,
}) => dispatch =>
  apiService
    .post('/auth/register', {
      firstName,
      lastName,
      email,
      password,
    })
    .then(res => {
      if (!res.ok) {
        toast.error(res.message, 5000);
        cookies.set('token', '');
        formikActions.setSubmitting(false);
        return;
      }
      toast.success('Successfully created account.', 3000);
      cookies.set('token', res.data.token);
      dispatch({ type: 'REGISTER_SUCCESS' });
      dispatch(push('/'));
    })
    .catch(err => {
      console.log(err);
      toast.error(err.message);
      cookies.set('token', '');
      formikActions.setSubmitting(false);
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
