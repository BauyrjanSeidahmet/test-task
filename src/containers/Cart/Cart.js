import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../../components/CartItem/CartItem';
import './Cart.css';

const Cart = () => {
  const cart = useSelector((state) => state.products.cart);

  const form = cart.length ? (
    <div className='Cart'>
      {cart.map((item) => {
        return (
          <CartItem
            key={item.uuid}
            id={item.uuid}
            image={item.picture}
            price={item.price}
            name={item.name}
            qty={item.qty}
          />
        );
      })}
    </div>
  ) : (
    <h1>Nothing found</h1>
  );

  return form;
};

export default Cart;
