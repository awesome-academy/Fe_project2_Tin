import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import NavBar from "./NavBar";
import Footer from "./Footer";
import Home from "../pages/home/Home";
import ProductDetail from "../pages/product-detail/ProductDetail";

class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <NavBar />
                    <div>
                        <Route path="/" exact component={Home} />
                        <Route path="/product-detail" component={ProductDetail} />
                    </div>
                    <Footer />
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
