import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path='/shop/hats'>

        </Route>
        <Route path='/shop/jackets'>
      
          </Route>
          <Route path='shop/sneakers'>
          
          </Route>
          <Route path='shop/womens'>
          
          </Route>
          <Route path='shop/mens'>
          
          </Route>
      </Switch>
    </div>
  );
}

export default App;
