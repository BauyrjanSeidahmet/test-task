import { FETCH_CATEGORIES_FAILURE, FETCH_CATEGORIES_SUCCESS, FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_SUCCESS } from '../actionTypes';
import axios from '../../axiosApi'

export const fetchCategoriesSuccess = categories => {
    return {type: FETCH_CATEGORIES_SUCCESS, categories};
  };
  
export const fetchCategoriesFailure = error => {
    return {type: FETCH_CATEGORIES_FAILURE, error};
  };

export const fetchCategories = () => {
    return async dispatch => {
      try {
        const response = await axios.get('/api/products/categories/');
        dispatch(fetchCategoriesSuccess(response.data));
      } catch(error) {
        dispatch(fetchCategoriesFailure(error));
      }
    };
  };

  export const fetchProductsSuccess = products => {
    return {type: FETCH_PRODUCTS_SUCCESS, products};
  };
  
export const fetchProductsFailure = error => {
    return {type: FETCH_PRODUCTS_FAILURE, error};
  };

export const fetchProducts = (id) => {
    return async dispatch => {
      try {
        const response = await axios.get(`/api/products?category=${id}`);
        dispatch(fetchProductsSuccess(response.data));
      } catch(error) {
        dispatch(fetchProductsFailure(error));
      }
    };
  };