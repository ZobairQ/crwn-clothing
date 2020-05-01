import React, { Component } from "react";
import "./sign.in.styles.scss";
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import {signInWithGoogle} from '../../firebase/firebase.utils';
export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with you email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
            label="email"
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
            label="password"
          />
          <div className='buttons'>
          <CustomButton type="submit" >SIGN IN</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
