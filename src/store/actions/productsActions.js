import {
  ADD_PRODUCT,
  CLEAR_CART,
  DECREASE_PRODUCT,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
  REMOVE_PRODUCT,
} from '../actionTypes';
import axios from '../../axiosApi';

export const fetchCategoriesSuccess = (categories) => {
  return { type: FETCH_CATEGORIES_SUCCESS, categories };
};

export const fetchCategoriesFailure = (error) => {
  return { type: FETCH_CATEGORIES_FAILURE, error };
};

export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/api/products/categories/');
      dispatch(fetchCategoriesSuccess(response.data));
    } catch (error) {
      dispatch(fetchCategoriesFailure(error));
    }
  };
};

export const fetchProductsSuccess = (products) => {
  return { type: FETCH_PRODUCTS_SUCCESS, products };
};

export const fetchProductsFailure = (error) => {
  return { type: FETCH_PRODUCTS_FAILURE, error };
};

export const fetchProducts = (url) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/products${url}`);
      dispatch(fetchProductsSuccess(response.data));
    } catch (error) {
      dispatch(fetchProductsFailure(error));
    }
  };
};

export const addProduct = (id) => ({ type: ADD_PRODUCT, id });
export const decreaseProduct = (id) => ({ type: DECREASE_PRODUCT, id });
export const removeProduct = (id) => ({ type: REMOVE_PRODUCT, id });
export const clearCart = () => ({ type: CLEAR_CART });
