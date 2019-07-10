import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import textSpbc from "../../../images/text-spbc.png";
import OneProduct from "./OneProduct";

export default class SPBC extends Component {
    render() {
        return (
            <div className="spbc">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 col-md-4 offset-sm-2 offset-md-4 text-center">
                            <img alt="" className="block-product__img " src={textSpbc} />
                        </div>
                    </div>
                    <div className="row mt-5 mb-5 pl-5 pl-sm-0">
                        <div className="col-6 col-sm-2">
                            <a href="./gird.html">Mỹ phẩm</a>
                        </div>
                        <div className="col-6 col-sm-2">
                            <a href="#">Quần áo</a>
                        </div>
                        <div className="col-6 col-sm-2">
                            <a href="#">Giày Sport</a>
                        </div>
                        <div className="col-6 col-sm-2">
                            <a href="#">Trang sức</a>
                        </div>
                        <div className="col-6 col-sm-2">
                            <a href="#">Nhẫn</a>
                        </div>
                        <div className="col-6 col-sm-2">
                            <a href="#">Heathy</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card-deck text-center">
                                {this.props.listProduct.map(product => {
                                    return (
                                        <OneProduct
                                            id={product.id}
                                            sold={product.sold}
                                            price={product.price}
                                            key={product.heading}
                                            heading={product.heading}
                                            linkImage={product.linkImage}
                                            description={product.description}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
