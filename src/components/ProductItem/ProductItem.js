import React from 'react';
import './ProductItem.css';
import PlusIcon from '../../assests/images/plus.svg'
import MinusIcon from '../../assests/images/minus.svg'

const ProductItem = ({ image, name }) => {
  const readyImage = `https://api.doover.tech${image}`;
  return (
    <div className='card'>
      <img src={readyImage} alt='Avatar' style={{ width: '100%' }} className='catImage'/>
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
