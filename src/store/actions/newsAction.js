import * as types from '../types/newsTypes';

// get all news
export const getAllNewsLoading = () => ({
  type: types.GET_ALL_NEWS_LOADING,
});

export const getAllNewsError = (payload) => ({
  type: types.GET_ALL_NEWS_ERROR,
  payload,
});

export const getAllNewsSuccess = (payload) => ({
  type: types.GET_ALL_NEWS_SUCCESS,
  payload,
});

export const getAllNewsSaga = () => ({
  type: types.GET_ALL_NEWS_SAGA,
});
// ---

// search news
export const searchNewsLoading = () => ({
  type: types.SEARCH_NEWS_LOADING,
});

export const searchNewsError = (payload) => ({
  type: types.SEARCH_NEWS_ERROR,
  payload,
});

export const searchNewsSuccess = (payload) => ({
  type: types.SEARCH_NEWS_SUCCESS,
  payload,
});

export const searchNewsSaga = (payload) => ({
  type: types.SEARCH_NEWS_SAGA,
  payload,
});
// ---

// add new news
export const addNewsLoading = () => ({
  type: types.ADD_NEWS_LOADING,
});

export const addNewsError = (payload) => ({
  type: types.ADD_NEWS_ERROR,
  payload,
});

export const addNewsSuccess = (payload) => ({
  type: types.ADD_NEWS_SUCCESS,
  payload,
});

export const addNewsSaga = (payload) => ({
  type: types.ADD_NEWS_SAGA,
  payload,
});
// ---

// approve news
export const approveNewsLoading = () => ({
  type: types.APPROVE_NEWS_LOADING,
});

export const approveNewsError = (payload) => ({
  type: types.APPROVE_NEWS_ERROR,
  payload,
});

export const approveNewsSuccess = (payload) => ({
  type: types.APPROVE_NEWS_SUCCESS,
  payload,
});

export const approveNewsSaga = (payload) => ({
  type: types.APPROVE_NEWS_SAGA,
  payload,
});
// ---

// delete news
export const deleteNewsLoading = () => ({
  type: types.DELETE_NEWS_LOADING,
});

export const deleteNewsError = (payload) => ({
  type: types.DELETE_NEWS_ERROR,
  payload,
});

export const deleteNewsSuccess = (payload) => ({
  type: types.DELETE_NEWS_SUCCESS,
  payload,
});

export const deleteNewsSaga = (payload) => ({
  type: types.DELETE_NEWS_SAGA,
  payload,
});
// ---
