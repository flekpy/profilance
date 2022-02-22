import { combineReducers } from 'redux';
import userReducer from './userReducer';
import newsReducer from './newsReducer';

const reducersSpec = {
  user: userReducer,
  news: newsReducer,
};

const rootReducer = combineReducers(reducersSpec);
export default rootReducer;
