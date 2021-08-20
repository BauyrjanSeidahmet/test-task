import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../../components/CartItem/CartItem';
import { addProduct, decreaseProduct, removeProduct } from '../../store/actions/productsActions';
import './Cart.css';

const Cart = () => {
  const cart = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();

  const onAdd = (id) => {
    dispatch(addProduct(id));
  };

  const onDecrease = (id) => {
    dispatch(decreaseProduct(id));
  };

  const onRemove = (id) => {
    dispatch(removeProduct(id));
  };

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
            brand={item.hint.title}
            description={item.hint.description}
            onAdd={() => onAdd(item.uuid)}
            onDecrease={() => onDecrease(item.uuid)}
            onRemove={() => onRemove(item.uuid)}
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
