import React from "react";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";

import NavBar from "./NavBar";
import Footer from "./Footer";
import Home from "../pages/home/Home";
import ProductDetail from "../pages/product-detail/ProductDetail";
import SignIn from "../pages/signin/SignIn";
import SignUp from "../pages/signup/Signup";
import SignOut from "../pages/signout/SignOut";
import ShoppingCart from "../pages/shoppingCart/ShoppingCart";
import Account from "../pages/account/Account";
import Edit from "../pages/edit-account/Edit";

class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <NavBar />
                    <div>
                        <Route path="/" exact component={Home} />
                        <Route path="/home" exact component={Home} />
                        <Route path="/product-detail" component={ProductDetail} />
                        <Route path="/sign-in" component={SignIn} />
                        <Route path="/sign-up" component={SignUp} />
                        <Route path="/sign-out" component={SignOut} />
                        <Route path="/account" component={Account} />
                        <Route path="/edit-account" component={Edit} />
                        <Route path="/shoppingCart" component={ShoppingCart} />
                    </div>
                    <Footer />
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
