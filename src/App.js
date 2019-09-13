import React from "react";
import { Route, Switch } from "react-router-dom";
import {connect} from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions'

import "./App.css";
import Header from "./Components/header/header.component.jsx";
import Homepage from "./pages/Homepage/Homepage.Component.jsx";
import ShopPage from "./pages/shop/shop.component.jsx";
import SignIn_SignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";


class App extends React.Component {
 
  unsubcribeFromAuth = null;

  componentDidMount() {
    const{setCurrentUser} =this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          }
        );
      });
        
      }
      else{
        setCurrentUser(userAuth)
      }
    });
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignIn_SignUp} />
        </Switch>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user)) 
})

export default connect(null,mapDispatchToProps)(App);
