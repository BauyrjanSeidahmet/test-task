import React from 'react';
import { Container } from '@material-ui/core';
import Header from './Header/Header';
import './Layout.css';
import Footer from './Footer/Footer';

const Layout = ({ children }) => (
  <div className='layout'>
    <Header />
    <Container maxWidth='xl'>{children}</Container>
    <Footer />
  </div>
);
export default Layout;
