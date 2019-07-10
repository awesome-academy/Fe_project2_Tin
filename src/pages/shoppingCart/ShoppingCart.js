import React, { Component } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import TableOrder from "./elements/TableOrder";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export class ShoppingCart extends Component {
    render() {
        return (
            <div className="sign-in">
                <NavBar />
                <Breadcrumb path1="giỏ hàng" />
                <TableOrder />
                <Footer />
            </div>
        );
    }
}

export default ShoppingCart;
