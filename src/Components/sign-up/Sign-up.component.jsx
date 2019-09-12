import React from "react";
import "./sign-up.styles.scss";
import Input from "../form-input/Input.component";
import CustomButton from "../custom-button/Custom-Buttom.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      comfirmPassword: ""
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, comfirmPassword } = this.state;

    if (password !== comfirmPassword) {
      alert("password don't match!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        comfirmPassword: ""
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, comfirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">Create an account</h2>
        <span>Sign Up, it's free! </span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <Input
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            label='email'
            required
          />
          <Input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <Input
            type="password"
            name="comfirmPassword"
            value={comfirmPassword}
            onChange={this.handleChange}
            label="Comfirm your password"
            required
          />

          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
