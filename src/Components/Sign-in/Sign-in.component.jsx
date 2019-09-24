import React from "react";

import {SignInContainer,SignInTitle,ButtonsBarContainer} from './sign-in.styles'

import Input from '../form-input/Input.component'
import CustomButton from "../custom-button/Custom-Buttom.component";
import {auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    const {email,password} = this.state;
    try{
       await auth.signInWithEmailAndPassword(email,password);
    }catch(error){
      console.error(error)
    }

    this.setState({ email: "", password: ""});
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <SignInContainer>
        <SignInTitle>I alredy have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
        
          <Input
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label='email'
            required
          />

          <Input
            type="password"
            name="password"
            value={this.state.password}
            handleChange={ this.handleChange}
            label='password'
            required
          />

          <ButtonsBarContainer>
            <CustomButton type="submit" >Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                Sign in with Google
            </CustomButton>
          </ButtonsBarContainer>

        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
