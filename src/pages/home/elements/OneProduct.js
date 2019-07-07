import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class OneProduct extends Component {
    render() {
        const productDetail = {
            pathname: "/product-detail",
            params: {
                id: this.props.id,
                price: this.props.price,
                heading: this.props.heading,
                linkImage: this.props.linkImage,
                description: this.props.description
            }
        };

        return (
            <div className="card custom-card mr-5 d-none d-md-block">
                <img
                    alt=""
                    className="card-img-top mx-auto"
                    style={{ width: "60%" }}
                    src={process.env.PUBLIC_URL + "/images/" + this.props.linkImage}
                />
                <div className="card-body">
                    <p className="card-title custom-card--title">
                        <strong>
                            <Link to={productDetail}>{this.props.heading}</Link>
                        </strong>
                    </p>
                    <p className="card-text custom-card--text">{this.props.price}đ</p>
                    <p className="custom-card--text">
                        <strong> đã bán: {this.props.sold}</strong>
                    </p>
                </div>
            </div>
        );
    }
}

export default OneProduct;
