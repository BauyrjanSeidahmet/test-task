import React from 'react';
import WhatsappIcon from '../../../assets/images/WhatsApp.svg';
import FacebookIcon from '../../../assets/images/Facebook.svg';
import YoutubeIcon from '../../../assets/images/YouTube.svg';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <h3>CONCEPT</h3>
      <div>
        <img className='accountImg' alt='whatsapp icon' src={WhatsappIcon} />
        <img className='accountImg' alt='facebook icon' src={FacebookIcon} />
        <img className='accountImg' alt='youtube icon' src={YoutubeIcon} />
      </div>
      <p>+7(708)380-70-09</p>
    </div>
  );
};

export default Footer;
