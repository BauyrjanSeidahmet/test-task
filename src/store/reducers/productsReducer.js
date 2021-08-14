import { FETCH_CATEGORIES_FAILURE, FETCH_CATEGORIES_SUCCESS } from "../actionTypes";

const initialState = {
  categories: [],
  catError: null,
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return {...state, categories: action.categories};
    case FETCH_CATEGORIES_FAILURE:
      return {...state, catError: action.error};
    default:
      return state;
  }
};

export default reducer;