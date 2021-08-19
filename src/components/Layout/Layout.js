import React from 'react';
import { Container } from '@material-ui/core';
import Header from './Header';

const Layout = ({ children }) => (
  <div style={{ maxWidth: '1000px', margin: '20px auto' }}>
    <Header />
    <Container maxWidth='xl'>{children}</Container>
  </div>
);
export default Layout;
