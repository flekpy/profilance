import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import newsSaga from './newsSaga';

export default function* rootSaga() {
  yield all([userSaga(), newsSaga()]);
}
