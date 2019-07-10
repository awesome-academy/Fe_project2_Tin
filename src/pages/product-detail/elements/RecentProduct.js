import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import heart4 from "../../../images/4heart.png";

export default class RecentProduct extends Component {
    renderProduct() {
        return this.props.data.map(product => {
            product = JSON.parse(product);
            const productDetail = {
                pathname: "/product-detail",
                params: {
                    id: product.id,
                    price: product.price,
                    heading: product.heading,
                    linkImage: product.linkImage,
                    description: product.description
                }
            };
            return (
                <div className="row mb-4">
                    <div className="col-6">
                        <img alt="" className="detail__img" src={process.env.PUBLIC_URL + "/images/" + product.linkImage} />
                    </div>
                    <div className="pl-0 pr-0 col-6">
                        <Link to={productDetail} className="detail__deco-a">
                            <strong> {product.heading} </strong>
                        </Link>
                        <img alt="" className="detail__img" src={heart4} />
                        <h5 className="custom-card--text mt-3">
                            <strong>{product.price}đ </strong>
                        </h5>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                {this.renderProduct()}
                {/* {localStorage.clear()} */}
            </div>
        );
    }
}
