import { push } from 'react-router-redux';
import { toast } from 'react-toastify';
import { post } from '../../services/apiService';

export const login = ({ email, password, actions }) => dispatch =>
  post('/auth/login', {
    email,
    password,
  })
    .then(res => {
      actions.setSubmitting(false);
      dispatch({ type: 'LOGIN_SUCCESS' });
      dispatch(push('/'));
      console.log(res);
    })
    .catch(err => {
      toast.error('Failed to login. Please try again.');
      actions.setSubmitting(false);
      console.log(err);
    });

export const register = ({
  firstName,
  lastName,
  email,
  password,
  actions,
}) => dispatch =>
  post('/auth/register', {
    firstName,
    lastName,
    email,
    password,
  })
    .then(res => {
      actions.setSubmitting(false);
      dispatch({ type: 'REGISTER_SUCCESS' });
      dispatch(push('/login'));
      toast.success('Successfully created account. Please login to continue.');
      console.log(res);
    })
    .catch(err => {
      toast.error(err.message);
      actions.setSubmitting(false);
      console.log(err);
    });

export const logout = () => dispatch => {
  dispatch({ type: 'LOGOUT' });
  dispatch(push('/login'));
  toast.info('Logged out.');
};
