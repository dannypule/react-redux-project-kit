import { handleActions } from 'redux-actions';
import { getUsers, addUser } from './actions';

const initialState = {
  users: {
    content: [],
    count: null,
    length: null,
    page: null,
    pages: null,
    error: null,
  },
  newUser: {
    createdAt: null,
    email: null,
    firstName: null,
    lastName: null,
    status: null,
    updatedAt: null,
    userRoleCode: null,
    uuid: null,
    error: null,
  },
};

const getUsersSuccess = (state, { payload }) => ({
  ...state,
  users: {
    content: payload.content,
    count: payload.count,
    length: payload.length,
    page: payload.page,
    pages: payload.pages,
  },
});
const getUsersFailure = (state, { payload }) => ({
  ...state,
  users: {
    ...initialState.users,
    error: payload,
  },
});
const addUserSuccess = (state, { payload }) => ({
  ...state,
  newUser: {
    createdAt: payload.user.createdAt,
    email: payload.user.email,
    firstName: payload.user.firstName,
    lastName: payload.user.lastName,
    status: payload.user.status,
    updatedAt: payload.user.updatedAt,
    userRoleCode: payload.user.userRoleCode,
    uuid: payload.user.uuid,
  },
});
const addUserFailure = (state, { payload }) => ({
  ...state,
  newUser: {
    ...initialState.newUser,
    error: payload,
  },
});
const usersReducer = handleActions(
  {
    [getUsers.SUCCESS]: getUsersSuccess,
    [getUsers.FAILURE]: getUsersFailure,
    [addUser.SUCCESS]: addUserSuccess,
    [addUser.FAILURE]: addUserFailure,
  },
  initialState,
);

export default usersReducer;
