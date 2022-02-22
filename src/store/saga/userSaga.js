import { put, takeEvery } from 'redux-saga/effects';
import * as types from '../types/userTypes';
import * as actions from '../actions/userAction';
import checkIsAuth from '../../utils/checkIsAuth';

function* loginUserSaga(action) {
  const { payload } = action;
  yield put(actions.loginUserLoading());
  try {
    const checkAuth = checkIsAuth(payload);

    if (checkAuth?.message) {
      yield put(actions.loginUserError(checkAuth.message));
    } else {
      yield put(actions.loginUserSuccess(checkAuth));
    }
  } catch (error) {
    yield put(actions.loginUserError(error));
  }
}

// logout
function* logoutUserSaga() {
  yield put(actions.logoutUserLoading());
  try {
    yield put(actions.logoutUserSuccess());
  } catch {
    yield put(actions.logoutUserError('Ошибка, попробуйте позже'));
  }
}

export default function* userSaga() {
  yield takeEvery(types.LOGIN_USER_SAGA, loginUserSaga);
  yield takeEvery(types.LOGOUT_USER_SAGA, logoutUserSaga);
}
