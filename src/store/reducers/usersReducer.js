import { LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAILURE } from '../actionTypes';

const initialState = {
  loginError: null,
  logoutError: null,
  user: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.user, loginError: null };
    case LOGIN_USER_FAILURE:
      return { ...state, loginError: action.error };
    case LOGOUT_USER_SUCCESS:
      return { initialState };
    case LOGOUT_USER_FAILURE:
      return { ...state, logoutError: action.error };
    default:
      return state;
  }
};

export default reducer;
