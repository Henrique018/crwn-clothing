import React from 'react';
import './App.css';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './Components/header/header.component.jsx'
import Homepage from './pages/Homepage/Homepage.Component.jsx'
import {Route,Switch} from 'react-router-dom'
import SignIn_SignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';

function App() {
  return (
    <div >
    <Header />
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component={SignIn_SignUp} />
    </Switch>
    </div>
  );
}

export default App;
