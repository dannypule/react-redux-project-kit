// import Router from 'next/router'
import { post } from '../../services/apiService';

export const login = ({ email, password, actions, toast }) => dispatch =>
  post('/auth/login', {
    email,
    password,
  })
    .then(res => {
      actions.setSubmitting(false);
      dispatch({ type: 'LOGIN_SUCCESS' });
      // Router.push('/');
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
  toast,
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
      // Router.push('/login').then(() =>
      //   toast.success(
      //     'Successfully created account. Please login to continue.',
      //   ),
      // );
      console.log(res);
    })
    .catch(err => {
      toast.error(err.message);
      actions.setSubmitting(false);
      console.log(err);
    });

export const logout = () => dispatch => {
  dispatch({ type: 'LOGOUT' });
  // Router.push('/login');
};
