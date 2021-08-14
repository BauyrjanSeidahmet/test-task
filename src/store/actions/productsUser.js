import { FETCH_CATEGORIES_FAILURE, FETCH_CATEGORIES_SUCCESS } from '../actionTypes';
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