import { users } from './routines';
import apiService from '../../services/apiService';

export const getUsers = () => dispatch => {
  apiService.get('/users').then(data => {
    console.log(data);
    dispatch(users.success(data));
  });
};

export const addUser = () => dispatch => { // eslint-disable-line
  apiService
    .post('/users', {
      firstName: 'duder',
      lastName: 'dudeson',
      email: 'duder.duder@fake-email.infozzz',
      password: 'admin',
      userRoleCode: 30,
      companyId: 2,
    })
    .then(data => {
      console.log(data);
    });
};
