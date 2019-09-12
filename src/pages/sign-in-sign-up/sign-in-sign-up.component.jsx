import React from 'react';
import './sign-in-sign-up.styles.scss';
import SignIn from '../../Components/Sign-in/Sign-in.component'
import SignUp from '../../Components/sign-up/Sign-up.component'

const SignIn_SignUp = () =>{
    return(
        <div className="container">
            <SignIn />
            <SignUp />
        </div>
    );
}

export default SignIn_SignUp;