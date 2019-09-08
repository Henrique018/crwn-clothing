import React from "react";
import "./Sign-in.styles.scss";
import Input from '../form-input/Input.component'
import CustomButton from "../custom-button/Custom-Buttom.component";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ email: "", password: ""});
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title ">I alredy have an account</h2>
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

          <CustomButton type="submit" >Sign in</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
