import React from 'react';
import {Route,Switch} from 'react-router-dom'
import './App.css';
import Header from './Components/header/header.component.jsx'
import Homepage from './pages/Homepage/Homepage.Component.jsx'
import ShopPage from './pages/shop/shop.component.jsx';
import SignIn_SignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { auth } from './firebase/firebase.utils'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser: ''
    }
  }

  unsubcribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
       this.setState({currentUser:user})
       console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubcribeFromAuth();
  }

  render(){
    return (
      <div >
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignIn_SignUp} />
      </Switch>
      </div>
    );
  }
}

export default App;
