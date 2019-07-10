import React, { Component } from "react";

import heart4 from "../../../images/4heart.png";
import RecentProduct from "./RecentProduct";

class ListRecentlyProduct extends Component {
    addRecentProduct() {
        const listKey = [];
        const listProduct = [];
        for (let i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i).substring(0, 14) === "viewedProduct-") {
                const key = localStorage.key(i);
                listKey.push(key);
            }
        }
        for (let i = 0; i < listKey.length; i++) {
            listProduct.push(localStorage.getItem(listKey[i]));
        }
        return <RecentProduct data={listProduct} />;
    }

    render() {
        return <div>{this.addRecentProduct()}</div>;
    }
}

export default ListRecentlyProduct;
