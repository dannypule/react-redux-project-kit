import { call, put, takeEvery } from 'redux-saga/effects';

import apiService from '../../services/apiService';
import { getUsers, addUser } from './actions';

export const potSelected = ({ withdraw: { chosenPotUuid } }) => chosenPotUuid;

export const dataMock = {
  contributions: {
    monthly: '600.0',
    allTime: '30500',
    lastMonth: '650',
  },
  returns: {
    allTime: {
      value: '130987.49',
      percentage: '10.44',
    },
    lastMonth: {
      value: '-120',
      percentage: '-1.99',
    },
  },
};

export function* usersApiCall() {
  return yield apiService.get('/users');
}
export function* addUserApiCall(data) {
  console.log(data);
  return yield apiService.post('/users/add_user', data);
}

export function* getUsersRequest({ payload }) {
  try {
    const res = yield call(usersApiCall, payload);

    if (res.ok) {
      yield put(getUsers.success(res.data));
    } else {
      yield put(getUsers.failure(res.message));
    }
  } catch (error) {
    yield put(getUsers.failure(error));
  }
}

export function* addUserRequest({ payload }) {
  try {
    const res = yield call(addUserApiCall, payload);

    if (res.ok) {
      yield put(addUser.success(res.data));
      yield put(getUsers.request());
    } else {
      yield put(addUser.failure(res.message));
    }
  } catch (error) {
    yield put(addUser.failure(error));
  }
}

export default function* sagas() {
  yield takeEvery(getUsers.REQUEST, getUsersRequest);
  yield takeEvery(addUser.REQUEST, addUserRequest);
}
