import React from 'react';
import { Container } from '@material-ui/core';
import Header from './Header/Header';
import './Layout.css';

const Layout = ({ children }) => (
  <div className='layout'>
    <Header />
    <Container maxWidth='xl'>{children}</Container>
  </div>
);
export default Layout;
