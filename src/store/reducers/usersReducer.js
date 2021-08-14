import { LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from "../actionTypes";

const initialState = {
    loginError: null,
    user: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
            return {...state, user: action.user, loginError: null};
        case LOGIN_USER_FAILURE:
            return {...state, loginError: action.error};
        default:
            return state;
    }
};

export default reducer;