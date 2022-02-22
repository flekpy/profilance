import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index';
import rootSaga from './saga/index';

const sagaMiddleware = createSagaMiddleware();

const initialState = {
  user: {
    loading: false,
    error: null,
    userData: {
      isAuth: false,
      login: null,
      role: null,
    },
  },
  news: {
    loading: false,
    error: null,
    newsData: [],
    approvedNews: [],
  },
};

const middlewares = [sagaMiddleware];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(rootSaga);

export default store;
