import React from 'react';
import './CartItem.css';

const CartItem = ({ image, price, name, qty }) => {
  const readyImage = `https://api.doover.tech${image}`;

  return (
    <div className='cartItem'>
      <div className='detail'>
        <button>?</button>
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
