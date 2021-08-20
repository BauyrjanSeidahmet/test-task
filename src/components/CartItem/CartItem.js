import React from 'react';
import { useState } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import ModalInside from '../ModalInside/ModalInside';
import './CartItem.css';

const CartItem = ({ image, price, name, qty, brand, description }) => {
  const [showModal, setShowModal] = useState(false);
  const readyImage = `https://api.doover.tech${image}`;

  const onClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='cartItem'>
      <Modal show={showModal} close={closeModal}>
        <ModalInside image={readyImage} name={name} brand={brand} description={description} />
      </Modal>
      <div className='detail'>
        <button onClick={onClick}>?</button>
      </div>
      <div className='imageWrap'>
        <img src={readyImage} alt='product' className='cardImage' />
      </div>
      <div className='textInfo'>
        <p>{name}</p>
        <p>Срок доставки/2 дня</p>
      </div>
      <div className='count'>
        <button>+</button>
        <span>{qty}</span>
        <button>-</button>
      </div>
      <div>
        <p className='price'>{price} тг</p>
      </div>
      <div className='remove'>
        <button>X</button>
      </div>
    </div>
  );
};

export default CartItem;
