import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../store/actions/productsActions';
import { useLocation } from 'react-router'
import ProductItem from '../../components/ProductItem/ProductItem';
import './Products.css'

const Products = () => {
  const dispatch = useDispatch();

  const search = useLocation().search
  const id = new URLSearchParams(search).get('category');

  console.log('id', id);

  const products = useSelector(state => state.products.products);

  useEffect(() => {
    dispatch(fetchProducts(id));
  }, [id]);

  return <div className='Products'>
      {products.map(product => {
        return <ProductItem
          id={product.uuid}
          name={product.name}
          image={product.picture}
        />
      })}
  </div>;
};

export default Products;