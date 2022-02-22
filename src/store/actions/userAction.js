import * as types from '../types/userTypes';

// login
export const loginUserLoading = () => ({
  type: types.LOGIN_USER_LOADING,
});

export const loginUserError = (payload) => ({
  type: types.LOGIN_USER_ERROR,
  payload,
});

export const loginUserSuccess = (payload) => ({
  type: types.LOGIN_USER_SUCCESS,
  payload,
});

export const loginUserSaga = (payload) => ({
  type: types.LOGIN_USER_SAGA,
  payload,
});
// ---

// logout
export const logoutUserLoading = () => ({
  type: types.LOGOUT_USER_LOADING,
});

export const logoutUserError = (payload) => ({
  type: types.LOGOUT_USER_ERROR,
  payload,
});

export const logoutUserSuccess = () => ({
  type: types.LOGOUT_USER_SUCCESS,
});

export const logoutUserSaga = () => ({
  type: types.LOGOUT_USER_SAGA,
});
// ---
