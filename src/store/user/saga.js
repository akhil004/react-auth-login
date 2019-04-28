import { takeLatest, call, put } from 'redux-saga/effects';
import { GET_USER, GET_USER_SUCCESS, GET_USER_ERROR } from './constants';
import { login } from './api';

/**
 * action Type of GET_USER
 * @param {Object} action
 */
function* userSaga(action) {
  try {
    const data = yield call(login, action.payload);
    yield localStorage.setItem('persist:root', JSON.stringify({
      phase: 'SUCCESS',
      user: JSON.stringify(data),
      error: null,
    }));
    yield put({ type: GET_USER_SUCCESS, data });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: GET_USER_ERROR, error });
  }
}

/**
 * Get User Saga
 */
export function* getUserSaga() {
  yield takeLatest(GET_USER, userSaga);
}
