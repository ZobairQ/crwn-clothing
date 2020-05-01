import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/ShopPage";
import Header from './components/header/Header';
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp';
import {auth} from './firebase/firebase.utils';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
    });
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
render(){
  return (
    <div>
    <Header currentUser= {this.state.currentUser}/>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        
        <Route path="/shop">
          <ShopPage />
        </Route>
        <Route path="/signin">
          <SignInAndSignUp/>
        </Route>
        <Route path="/shop/hats"></Route>
        <Route path="/shop/jackets"></Route>
        <Route path="shop/sneakers"></Route>
        <Route path="shop/womens"></Route>
        <Route path="shop/mens"></Route>
      </Switch>
    </div>
  );
}
}

export default App;
