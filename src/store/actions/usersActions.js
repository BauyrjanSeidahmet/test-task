import axios from '../../axiosApi';
import { push } from 'connected-react-router';
import { LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from '../actionTypes';

const loginUserSuccess = (user) => {
  return { type: LOGIN_USER_SUCCESS, user };
};
const loginUserFailure = (error) => {
  return { type: LOGIN_USER_FAILURE, error };
};

export const loginUser = (userData) => {
  return async (dispatch) => {
    const headers = {
      'Content-Type': 'application/json',
    };
    const responseType = 'text';
    try {
      const response = await axios.post('/api/token', userData, {
        responseType,
        headers: {
          ...headers,
        },
      });
      dispatch(loginUserSuccess(response.data));
      dispatch(push('/'));
    } catch (error) {
      dispatch(loginUserFailure(error));
    }
  };
};
