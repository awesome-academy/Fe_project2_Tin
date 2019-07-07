import React, { Component } from "react";

import detail1 from "../../../images/detail1.png";
import detail2 from "../../../images/detail2.png";
import detail3 from "../../../images/detail3.png";
import detail4 from "../../../images/detail4.png";

export default class DetailInfo extends Component {
    componentDidMount() {
        if (this.props.dataOneProduct !== undefined) {
            localStorage.setItem(
                `viewedProduct-${parseInt(this.props.dataOneProduct.id)}`,
                JSON.stringify({
                    heading: this.props.dataOneProduct.heading,
                    linkImage: this.props.dataOneProduct.linkImage,
                    price: this.props.dataOneProduct.price
                })
            );
        }
    }
    render() {
        return (
            <div className="container">
                <div className="detail">
                    <div className="row content">
                        <div className="col-3 col-md-1">
                            <a href="#">
                                <img alt="" className="ml-2" src="../../asset/images/up-arrow.png" />
                            </a>
                            <img alt="" src={detail1} />
                            <img alt="" src={detail2} />
                            <img alt="" src={detail3} />
                            <img alt="" src={detail4} />
                            <a href="#">
                                <img alt="" className="ml-2" src="../../asset/images/down-arrow.png" />
                            </a>
                        </div>
                        <div className="col-9 col-md-6">
                            <div>
                                <img
                                    alt=""
                                    className="ml-5"
                                    style={{ width: "55%" }}
                                    src={
                                        this.props.dataOneProduct !== undefined
                                            ? process.env.PUBLIC_URL + "/images/" + this.props.dataOneProduct.linkImage
                                            : ""
                                    }
                                />
                            </div>
                        </div>
                        <div className="col-md-5">
                            <h5 className="mb-0">
                                {this.props.dataOneProduct !== undefined ? this.props.dataOneProduct.heading : ""}
                            </h5>
                            <small className="text-muted">TIFFANY MS 8050</small>
                            <br />
                            <h2 className="para--price-detail">
                                {this.props.dataOneProduct !== undefined ? this.props.dataOneProduct.price : ""}
                            </h2>
                            <small>
                                <i>
                                    <strike>499.000đ</strike>
                                </i>
                            </small>
                            <p className="para para--detail">
                                {this.props.dataOneProduct !== undefined ? this.props.dataOneProduct.description : ""}
                            </p>
                            <div className="form-group">
                                <label>
                                    <strong> MÀU SẮC</strong>
                                </label>
                                <input
                                    className="form-control custom-input--detail"
                                    type="text"
                                    id=""
                                    onChange={() => ""}
                                    placeholder="Màu bạc"
                                />
                                <br />
                                <label>
                                    <strong> SỐ LƯỢNG</strong>
                                </label>
                                <input
                                    className="form-control custom-input--detail input-amount"
                                    type="text"
                                    onChange={() => ""}
                                    id=""
                                    value="1"
                                />
                            </div>
                            <a
                                className="btn btn-light custom-btn custom-btn--detail add-cart-btn"
                                name=""
                                id="submit"
                                href="shoppingCart.html"
                                role="button"
                            >
                                Thêm vào giỏ hàng
                            </a>
                            <img alt="" className="ml-1 mt-n2" src="../../asset/images/green-heart.png" />
                            <br />
                            <small>
                                Shipping &amp;<a href="#"> return</a>
                            </small>
                            <a href="./page404.html">
                                <img alt="" className="col-lg-10 detail__img" src="../../asset/images/links.png" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
