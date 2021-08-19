import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../store/actions/productsActions';
import { useLocation } from 'react-router';
import ProductItem from '../../components/ProductItem/ProductItem';
import './Products.css';

const Products = () => {
  const dispatch = useDispatch();

  const url = useLocation().search;
  const products = useSelector((state) => state.products.products);
  const cart = useSelector((state) => state.products.cart);

  useEffect(() => {
    dispatch(fetchProducts(url));
  }, [url]);

  const form = products.length ? (
    <div className='Products'>
      {products.map((product) => {
        return (
          <ProductItem
            key={product.uuid}
            id={product.uuid}
            name={product.name}
            image={product.picture}
            price={product.price}
            brand={product.hint.title}
            description={product.hint.description}
            chosen={cart.filter((currentValue) => currentValue.uuid === product.uuid)[0]}
          />
        );
      })}
    </div>
  ) : (
    <h1>Nothing found</h1>
  );

  return form;
};

export default Products;
