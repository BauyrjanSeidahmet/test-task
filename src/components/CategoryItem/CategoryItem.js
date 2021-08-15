import React from 'react';
import './CategoryItem.css';

const CategoryItem = ({ image, name }) => {
  const readyImage = `https://api.doover.tech${image}`;
  return (
    <div className='card'>
      <img src={readyImage} alt='Avatar' style={{ width: '100%' }} className='catImage'/>
      <div className='container'>
        <h4>
          <b>{name}</b>
        </h4>
        <p>Items</p>
      </div>
    </div>
  );
};

export default CategoryItem;
