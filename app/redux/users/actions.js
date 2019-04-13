import { createRoutine } from 'redux-saga-routines';

// export const addUser = () => () => {
//   apiService
//     .post('/users', {
//       firstName: 'duder',
//       lastName: 'dudeson',
//       email: 'duder.duder@fake-email.infozzz',
//       password: 'admin',
//       userRoleCode: 30,
//       companyId: 2,
//     })
//     .then(data => {
//       console.log(data);
//     });
// };

export const GET_USERS = 'GET_USERS';
export const ADD_USER = 'ADD_USER';

export const getUsers = createRoutine(GET_USERS);
export const addUser = createRoutine(ADD_USER);
