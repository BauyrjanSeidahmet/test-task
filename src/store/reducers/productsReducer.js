import {
  ADD_PRODUCT,
  DECREASE_PRODUCT,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
} from '../actionTypes';

const initialState = {
  categories: [],
  products: [],
  getCatError: null,
  getProductError: null,
  cart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return { ...state, categories: action.categories };
    case FETCH_CATEGORIES_FAILURE:
      return { ...state, getCatError: action.error };
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, products: action.products };
    case FETCH_PRODUCTS_FAILURE:
      return { ...state, getProductError: action.error };
    case ADD_PRODUCT:
      const item1 = state.products.find((prod) => prod.uuid === action.id);
      const inCart = state.cart.find((cartItem) => (cartItem.uuid === action.id ? true : false));
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) => (item.uuid === action.id ? { ...item, qty: item.qty + 1 } : item))
          : [...state.cart, { ...item1, qty: 1 }],
      };
    case DECREASE_PRODUCT:
      const inCart1 = state.cart.find((cartItem) => (cartItem.uuid === action.id ? true : false));

      const itemInCard = state.cart.find((cartItem) => cartItem.uuid === action.id);
      return {
        ...state,
        cart: inCart1
          ? itemInCard.qty === 1
            ? state.cart.filter((item) => item.uuid !== action.id)
            : state.cart.map((item) => (item.uuid === action.id ? { ...item, qty: item.qty - 1 } : item))
          : [...state.cart],
      };
    default:
      return state;
  }
};

export default reducer;
