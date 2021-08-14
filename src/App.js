import React from 'react';
import {Switch, Route} from "react-router-dom";
import Categories from './containers/Categories/Categories';
import Login from './containers/Login/Login';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Categories}/>
      <Route exact path='/login' component={Login}/>
    </Switch>
  );
}

export default App;
