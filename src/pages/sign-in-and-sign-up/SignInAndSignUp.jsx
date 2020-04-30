import React, { Component } from "react";
import "./sign.in.and.sign.up.styles.scss";
import SignIn from '../../components/sign-in/SignIn';
export class SignInAndSignUp extends Component {
  render() {
    return <div className='sign-in-and-sign-up'>
    <SignIn/>
    </div>;
  }
}

export default SignInAndSignUp;
