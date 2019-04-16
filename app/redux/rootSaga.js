import { fork } from 'redux-saga/effects';

import userSagas from './users/sagas';

function* rootSaga() {
  yield fork(userSagas);
}

export default rootSaga;
