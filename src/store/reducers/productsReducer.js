import {
  ADD_PRODUCT,
  DECREASE_PRODUCT,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
  REMOVE_PRODUCT,
} from '../actionTypes';

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart'));
const totalPriceFromLocalStorage = JSON.parse(localStorage.getItem('totalPrice'));

const initialState = {
  categories: [],
  products: [],
  getCatError: null,
  getProductError: null,
  cart: cartFromLocalStorage,
  totalPrice: totalPriceFromLocalStorage,
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
        totalPrice: state.totalPrice + item1.price,
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
        totalPrice: state.totalPrice - itemInCard.price,
      };
    case REMOVE_PRODUCT:
      const item = state.cart.find((cartItem) => cartItem.uuid === action.id);
      return {
        ...state,
        cart: state.cart.filter((item) => item.uuid !== action.id),
        totalPrice: state.totalPrice - item.price * item.qty,
      };
    default:
      return state;
  }
};

export default reducer;
