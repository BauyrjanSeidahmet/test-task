import React from 'react';
import {Switch, Route} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Categories from './containers/Categories/Categories';
import Login from './containers/Login/Login';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path='/' component={Categories}/>
        <Route exact path='/login' component={Login}/>
      </Switch>
    </Layout>
  );
}

export default App;
