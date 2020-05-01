import React, { Component } from "react";
import "./sign.in.and.sign.up.styles.scss";
import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';
export class SignInAndSignUp extends Component {
  render() {
    return <div className='sign-in-and-sign-up'>
    <SignIn/>
    <SignUp/>
    </div>;
  }
}

export default SignInAndSignUp;
