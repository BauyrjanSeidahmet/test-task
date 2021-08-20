import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../../components/CartItem/CartItem';
import { addProduct, clearCart, decreaseProduct, removeProduct } from '../../store/actions/productsActions';
import Modal from '../../components/UI/Modal/Modal';
import { push } from 'connected-react-router';
import './Cart.css';

const Cart = () => {
  const cart = useSelector((state) => state.products.cart);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const totalPrice = useSelector((state) => state.products.totalPrice);

  const onAdd = (id) => {
    dispatch(addProduct(id));
  };

  const onDecrease = (id) => {
    dispatch(decreaseProduct(id));
  };

  const onRemove = (id) => {
    dispatch(removeProduct(id));
  };

  const onClick = () => {
    setShowModal(true);
  };

  const sendOrder = () => {
    dispatch(clearCart());
    dispatch(push('/'));
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
  }, [cart, totalPrice]);

  const allQty = cart?.length;

  const form = cart?.length ? (
    <div className='Cart'>
      <Modal show={showModal} close={closeModal}>
        <div className='orderModal'>
          <h3>Потвердите ваш заказ</h3>
          <p>Отслеживайте статус вашего заказа в профиле</p>
          <button className='modalBtn' onClick={sendOrder}>
            Потвердить
          </button>
          <button className='modalBtn' onClick={closeModal}>
            Отменить
          </button>
        </div>
      </Modal>
      <div className='cartItems'>
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
      <div className='total'>
        <div className='totalBox'>
          <h4>ИТОГО</h4>
          <hr />
          <p>{allQty} вещи</p>
          <p>Общая сумма {totalPrice} тг</p>
          <button className='orderBtn' onClick={onClick}>
            Оформить
          </button>
        </div>
      </div>
    </div>
  ) : (
    <h1>Nothing found</h1>
  );

  return form;
};

export default Cart;
