import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, decreaseProduct, fetchProducts } from '../../store/actions/productsActions';
import { useLocation } from 'react-router';
import ProductItem from '../../components/ProductItem/ProductItem';
import './Products.css';

const Products = () => {
  const dispatch = useDispatch();

  const url = useLocation().search;
  const products = useSelector((state) => state.products.products);
  const categories = useSelector((state) => state.products.categories);
  const cart = useSelector((state) => state.products.cart);

  useEffect(() => {
    dispatch(fetchProducts(url));
  }, [url]);

  const onAdd = (id) => {
    dispatch(addProduct(id));
  };

  const onDecrease = (id) => {
    dispatch(decreaseProduct(id));
  };

  let categoryName = null;
  if (categories && products) {
    const product = products[0];
    const categoryArray = categories.filter((cat) => cat.uuid === product?.category);
    const category = categoryArray[0];
    categoryName = category?.name;
  }

  const form = products ? (
    <div className='Products'>
      <h3>Главная/{categoryName}</h3>
      <div className='ProductsList'>
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
              onAdd={() => onAdd(product.uuid)}
              onDecrease={() => onDecrease(product.uuid)}
              chosen={cart?.filter((currentValue) => currentValue.uuid === product.uuid)[0]}
            />
          );
        })}
      </div>
    </div>
  ) : (
    <h1>Nothing found</h1>
  );

  return form;
};

export default Products;
