import {
  put, takeEvery, takeLatest, delay,
} from 'redux-saga/effects';
import * as types from '../types/newsTypes';
import * as actions from '../actions/newsAction';
import { newsData } from '../../data/newsData';
import searchNews from '../../utils/searchNews';

// get All news
function* getAllNewsSaga() {
  yield put(actions.getAllNewsLoading());
  try {
    yield put(actions.getAllNewsSuccess(newsData));
  } catch (error) {
    yield put(actions.getAllNewsError(error));
  }
}
// ---

// search news
function* searchNewsSaga({ payload }) {
  yield put(actions.searchNewsLoading());
  try {
    // ждем 1 секунду пока юзер закончит писать
    yield delay(1000);
    const searchResult = searchNews(payload);
    if (searchResult === 'ничего не найдено') {
      yield put(actions.searchNewsError('ничего не найдено'));
    } else {
      yield put(actions.searchNewsSuccess(searchResult));
    }
  } catch (error) {
    yield put(actions.searchNewsError(error));
  }
}
// ---

// add new news
function* addNewsSaga(action) {
  const { payload } = action;
  yield put(actions.addNewsLoading());
  try {
    yield put(actions.addNewsSuccess(payload));
  } catch (error) {
    yield put(actions.addNewsError(error));
  }
}
// ---

// approve news
function* approveNewsSaga(action) {
  const { payload } = action;
  yield put(actions.approveNewsLoading());
  try {
    yield put(actions.approveNewsSuccess(payload));
  } catch (error) {
    yield put(actions.approveNewsError(error));
  }
}
// ---

// delete news
function* deleteNewsSaga(action) {
  const { payload } = action;
  yield put(actions.deleteNewsLoading());
  try {
    yield put(actions.deleteNewsSuccess(payload));
  } catch (error) {
    yield put(actions.deleteNewsError(error));
  }
}
// ---

// saga watcher
export default function* newsSaga() {
  yield takeEvery(types.GET_ALL_NEWS_SAGA, getAllNewsSaga);
  yield takeLatest(types.SEARCH_NEWS_SAGA, searchNewsSaga);
  yield takeEvery(types.ADD_NEWS_SAGA, addNewsSaga);
  yield takeEvery(types.APPROVE_NEWS_SAGA, approveNewsSaga);
  yield takeEvery(types.DELETE_NEWS_SAGA, deleteNewsSaga);
}
// ---
