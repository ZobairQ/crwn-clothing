import React, { Component } from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/original.svg";
import {auth} from '../../firebase/firebase.utils';
export class Header extends Component {
 
  render() {
    const {currentUser} = this.props;
    return (
      <div className="header">
        <Link className="logo-container" to="/">
          <Logo className="logo"></Logo>
        </Link>
        <div className="options">
          <Link className="option" to="/shop">
            SHOP
          </Link>
          <Link className="option" to="/shop">
            CONTACT
          </Link>
          {
            currentUser ? 
            <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> 
            :
            <Link className="option" to="/signin">
            SIGN IN
          </Link>
          }
         
        </div>
      </div>
    );
  }
}

export default Header;
