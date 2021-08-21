import React, { useState } from 'react';
import './ProductItem.css';
import PlusIcon from '../../assets/images/plus.svg';
import MinusIcon from '../../assets/images/minus.svg';
import Modal from '../../components/UI/Modal/Modal';
import ModalInside from '../ModalInside/ModalInside';

const ProductItem = ({ image, name, brand, description, chosen, onAdd, onDecrease, price }) => {
  const [showModal, setShowModal] = useState(false);
  const readyImage = `https://api.doover.tech${image}`;

  const onClickProduct = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='card'>
      <Modal show={showModal} close={closeModal}>
        <ModalInside image={readyImage} name={name} brand={brand} description={description} />
      </Modal>
      <div className='prodImageWrap'>
        <img src={readyImage} alt='Avatar' className='prodCardImage' />
      </div>
      <div className='productText'>
        <h4>
          <b>{name}</b>
        </h4>
        <p>Cрок доставки/2 дня</p>
        <p>{price} тг</p>
        <div className='countBtns'>
          <img alt='plus icon' src={PlusIcon} onClick={onAdd} className='plusBtn' />
          <span>{chosen && chosen.qty}</span>
          {chosen ? <img alt='minus icon' src={MinusIcon} onClick={onDecrease} /> : null}
        </div>
      </div>
      <div className='prodDetail'>
        <button onClick={onClickProduct}>?</button>
      </div>
    </div>
  );
};

export default ProductItem;
