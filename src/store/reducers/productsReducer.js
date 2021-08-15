import { FETCH_CATEGORIES_FAILURE, FETCH_CATEGORIES_SUCCESS, FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_SUCCESS } from "../actionTypes";

const initialState = {
  categories: [],
  products: [],
  catError: null,
  getProductError: null,
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return {...state, categories: action.categories};
    case FETCH_CATEGORIES_FAILURE:
      return {...state, catError: action.error};
    case FETCH_PRODUCTS_SUCCESS:
      return {...state, products: action.products};
    case FETCH_PRODUCTS_FAILURE:
      return {...state, getProductError: action.error};
    default:
      return state;
  }
};

export default reducer;