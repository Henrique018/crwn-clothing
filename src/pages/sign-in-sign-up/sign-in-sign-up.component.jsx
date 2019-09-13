import React from 'react';
import './sign-in-sign-up.styles.scss';
import SignIn from '../../Components/Sign-in/Sign-in.component'
import SignUp from '../../Components/sign-up/Sign-up.component'

const SignInSignUp = () =>{
    return(
        <div className="container">
            <SignIn />
            <SignUp />
        </div>
    );
}

export default SignInSignUp;