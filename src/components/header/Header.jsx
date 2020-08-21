import React, { Component } from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/original.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart/CartDropdown';
export class Header extends Component {
  render() {
    const { currentUser, hidden } = this.props;
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
          {currentUser ? (
            <div className="option" onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
          ) : (
            <Link className="option" to="/signin">
              SIGN IN
            </Link>
          )}
          <CartIcon/>
        </div>
        {
          hidden ? null : <CartDropdown/>
        }
      </div>
    );
  }
}

// { user: { currentUser } } this is equals state.user.currentUser;
const mapStateToProps = ({user: {currentUser}, cart:{ hidden }}) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);
