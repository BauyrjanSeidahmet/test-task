import React from 'react';
import { NavLink } from 'react-router-dom';
import './CategoryItem.css';

const CategoryItem = ({ image, name, id }) => {
  const readyImage = `https://api.doover.tech${image}`;
  return (
    <NavLink className='catCard' to={`/products?category=${id}`}>
      <img src={readyImage} alt='Avatar' style={{ width: '100%' }} className='catImage' />
      <div className='container'>
        <h4>
          <b>{name}</b>
        </h4>
        <p>Items</p>
      </div>
    </NavLink>
  );
};

export default CategoryItem;
