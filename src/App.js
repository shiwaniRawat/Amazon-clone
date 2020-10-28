import React, { useEffect }  from 'react';
import './App.css';
import Header from "./Header"
import Home from './Home';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Checkout from './Checkout';
import Login from './Login';
import {auth} from "./firebase"
import { useStateValue } from './StateProvider';
import Hamburger from "./Hamburger";
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders';
import Footer from './Footer';

const promise = loadStripe(
  "pk_test_51HQxfVH6ks1snGfCxpmQm9onwf555BPL8Er8NCWOqWQoZu9VvrDO2KOU35JhYMY2uSznsTfpFoQX1VTUocxXMye300TSvqs5Y1"
);


function App() {
  const[{},dispatch]=useStateValue()
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
          displayName:authUser.displayName,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
          displayName:null,
        });
      }
    });
  }, []);
  
  
  return (

    //bem
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
          <Header />
            <Login />
          </Route>
          {/* <Route path='/register'>
            <Register />
          </Route> */}
          <Route path='/ham'>
            <Header />
            <Hamburger />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
