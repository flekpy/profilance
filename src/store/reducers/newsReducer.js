import * as types from '../types/newsTypes';

export default function newsReducer(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case types.GET_ALL_NEWS_LOADING:
    case types.SEARCH_NEWS_LOADING:
    case types.ADD_NEWS_LOADING:
    case types.APPROVE_NEWS_LOADING:
    case types.DELETE_NEWS_LOADING: {
      const newState = { ...state };
      newState.loading = true;
      return newState;
    }

    case types.GET_ALL_NEWS_SUCCESS:
    case types.SEARCH_NEWS_SUCCESS: {
      const newState = { ...state };
      newState.loading = false;
      newState.error = null;
      newState.newsData = payload;
      return newState;
    }

    case types.ADD_NEWS_SUCCESS: {
      const newState = { ...state };
      newState.loading = false;
      newState.error = null;
      newState.approvedNews = [...newState.approvedNews, payload];
      return newState;
    }

    case types.APPROVE_NEWS_SUCCESS: {
      const newState = { ...state };
      newState.loading = false;
      newState.error = null;
      newState.newsData.unshift(payload);
      newState.approvedNews = newState.approvedNews.filter((news) => news.id !== payload.id);
      return newState;
    }

    case types.DELETE_NEWS_SUCCESS: {
      const newState = { ...state };
      newState.loading = false;
      newState.error = null;
      newState.approvedNews = newState.approvedNews.filter((news) => news.id !== payload.id);
      return newState;
    }

    case types.GET_ALL_NEWS_ERROR:
    case types.SEARCH_NEWS_ERROR:
    case types.ADD_NEWS_ERROR:
    case types.APPROVE_NEWS_ERROR:
    case types.DELETE_NEWS_ERROR: {
      const newState = { ...state };
      newState.loading = false;
      newState.error = payload;
      return newState;
    }

    default: {
      return state;
    }
  }
}
