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

// export function* switchToCashRequest() {
//   try {
//     const riskLevel = 0;
//     const potUuid = yield select(potSelected);
//     const params = {
//       potUuid,
//       investmentStyle: INVESTMENT_STYLE,
//       riskLevel,
//     };
//     const { data } = yield call(switchToCashCall, params);

//     yield put(switchToCash.success(data));
//   } catch (error) {
//     yield put(switchToCash.failure(error.message));
//   }
// }

// export function* potAllocationRequest({ payload }) {
//   try {
//     const { data } = yield call(potAllocationCall, payload);

//     yield put(potAllocation.success(data));
//   } catch (error) {
//     yield put(potAllocation.failure(error.message));
//   }
// }

// export function* potHoldingsRequest({ payload }) {
//   try {
//     const {
//       data: { holdings },,
//     } = yield call(potHoldingsCall, payload);

//     yield put(potHoldings.success(holdings));
//   } catch (error) {
//     yield put(potHoldings.failure(error.message));
//   }
// }

export default function* sagas() {
  yield takeEvery(getUsers.REQUEST, getUsersRequest);
  yield takeEvery(addUser.REQUEST, addUserRequest);
}
