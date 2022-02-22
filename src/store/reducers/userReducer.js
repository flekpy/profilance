import * as types from '../types/userTypes';

export default function userReducer(state = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case types.LOGIN_USER_LOADING:
    case types.LOGOUT_USER_LOADING: {
      const newState = { ...state };
      newState.loading = true;
      return newState;
    }

    case types.LOGIN_USER_SUCCESS: {
      const newState = { ...state };
      newState.loading = false;
      newState.userData = { isAuth: true, ...payload };
      return newState;
    }

    case types.LOGOUT_USER_SUCCESS: {
      const newState = { ...state };
      newState.loading = false;
      newState.userData = { };
      return newState;
    }

    case types.LOGIN_USER_ERROR:
    case types.LOGOUT_USER_ERROR: {
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
