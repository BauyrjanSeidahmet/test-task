import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';
import { Redirect } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Cart from './containers/Cart/Cart';
import Categories from './containers/Categories/Categories';
import Login from './containers/Login/Login';
import Products from './containers/Products/Products';

const ProtectedRoute = ({ isAllowed, redirectTo, ...props }) => {
  return isAllowed ? <Route {...props} /> : <Redirect to={redirectTo} />;
};

const App = () => {
  const user = useSelector((state) => state.users.user);
  return (
    <Layout>
      <Switch>
        <ProtectedRoute isAllowed={user} redirectTo={'/login'} path='/' exact component={Categories} />
        <ProtectedRoute isAllowed={user} redirectTo={'/login'} path='/products' exact component={Products} />
        <ProtectedRoute isAllowed={user} redirectTo={'/login'} path='/cart' exact component={Cart} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </Layout>
  );
};

export default App;
