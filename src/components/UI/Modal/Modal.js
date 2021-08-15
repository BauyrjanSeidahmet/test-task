import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import './Modal.css';

const Modal = ({ children, show, close }) => {
  return (
    <>
      <Backdrop show={show} clicked={close} />
      <div
        className='Modal'
        style={{
          transform: `translateY(${show ? 0 : '-200vh'})`,
          opacity: show ? 1 : 0,
        }}
      >
        <div className='modalBtnWrap'>
          <button className='modalBtn' onClick={close}>X</button>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default Modal;
