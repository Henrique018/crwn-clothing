import React from 'react';
import {SignInSignUpContainer} from './sign-in-sign-up.styles'
import SignIn from '../../Components/Sign-in/Sign-in.component'
import SignUp from '../../Components/sign-up/Sign-up.component'

const SignInSignUp = () =>{
    return(
        <SignInSignUpContainer>
            <SignIn />
            <SignUp />
        </SignInSignUpContainer>
    );
}

export default SignInSignUp;