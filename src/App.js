import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Cart from './containers/Cart/Cart';
import Categories from './containers/Categories/Categories';
import Login from './containers/Login/Login';
import Products from './containers/Products/Products';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path='/' component={Categories} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/cart' component={Cart} />
      </Switch>
    </Layout>
  );
};

export default App;
