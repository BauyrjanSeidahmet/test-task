import React from 'react';
import './ModalInside.css';

const ModalInside = ({ name, brand, description }) => {
  return (
    <div>
      <h4>{name}</h4>
      <p>Brand: {brand}</p>
      <p>{description}</p>
    </div>
  );
};

export default ModalInside;
