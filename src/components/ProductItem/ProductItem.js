import React from 'react';
import './ProductItem.css';
import PlusIcon from '../../assets/images/plus.svg'
import MinusIcon from '../../assets/images/minus.svg'
import { useState } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import ModalInside from '../ModalInside/ModalInside';

const ProductItem = ({ image, name, brand, description }) => {
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
      <Modal
          show={showModal}
          close={closeModal}
          children={<ModalInside image ={readyImage} name={name} brand={brand} description={description}/>}
      />
      <img src={readyImage} alt='Avatar' style={{ width: '100%' }} className='catImage'/>
      <button onClick={onClickProduct}>?</button>
      <div className='container'>
        <h4>
          <b>{name}</b>
        </h4>
        <div>
            <img alt='plus icon' src={PlusIcon}/>
            <img alt='minus icon' src={MinusIcon}/>
        </div>
      </div>
    </div>


  );
};

export default ProductItem;
