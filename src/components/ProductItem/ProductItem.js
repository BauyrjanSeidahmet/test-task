import React from 'react';
import './ProductItem.css';
import PlusIcon from '../../assets/images/plus.svg';
import MinusIcon from '../../assets/images/minus.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from '../../components/UI/Modal/Modal';
import ModalInside from '../ModalInside/ModalInside';
import { addProduct, decreaseProduct } from '../../store/actions/productsActions';

const ProductItem = ({ image, name, brand, description, id, chosen }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const readyImage = `https://api.doover.tech${image}`;

  const onClickProduct = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const onAdd = () => {
    dispatch(addProduct(id));
  };

  const onRemove = () => {
    dispatch(decreaseProduct(id));
  };

  return (
    <div className='card'>
      <Modal show={showModal} close={closeModal}>
        <ModalInside image={readyImage} name={name} brand={brand} description={description} />
      </Modal>
      <img src={readyImage} alt='Avatar' className='catImage' />
      <button onClick={onClickProduct}>?</button>
      <div className='container'>
        <h4>
          <b>{name}</b>
        </h4>
        <div>
          <img alt='plus icon' src={PlusIcon} onClick={onAdd} />
          {chosen ? <img alt='minus icon' src={MinusIcon} onClick={onRemove} /> : null}
          <span>{chosen && chosen.qty}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
