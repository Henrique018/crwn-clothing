import React from 'react';
import './App.css';
import Homepage from './pages/Homepage/Homepage.Component.jsx'
import ShopPage from './pages/shop/shop.component.jsx';
import {Route,Switch} from 'react-router-dom'




function App() {
  return (
    <div >
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={ShopPage} />
    </Switch>
    </div>
  );
}

export default App;
