import React, { Component } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import TableOrder from "./elements/TableOrder";

export class ShoppingCart extends Component {
    render() {
        return (
            <div className="sign-in">
                <Breadcrumb path1="giỏ hàng" />
                <TableOrder />
            </div>
        );
    }
}

export default ShoppingCart;
