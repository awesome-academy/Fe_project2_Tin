import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import detail1 from "../../../images/detail1.png";
import detail2 from "../../../images/detail2.png";
import detail3 from "../../../images/detail3.png";
import detail4 from "../../../images/detail4.png";

class DetailInfo extends Component {
    constructor() {
        super();
        this.state = { idProduct: 0, quantity: 0 };
        this.addCart = this.addCart.bind(this);
    }

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
            this.setState({ idProduct: this.props.dataOneProduct.id });
        }
    }

    addCart() {
        const choseProduct = {
            headingProduct: this.props.dataOneProduct.heading,
            price: this.props.dataOneProduct.price,
            idProduct: this.state.idProduct,
            linkImage: this.props.dataOneProduct.linkImage,
            quantity: this.state.quantity
        };
        let inforOrder = JSON.parse(localStorage.getItem("userLogined"));
        inforOrder.dataOrder.push(choseProduct);
        localStorage.setItem("userLogined", JSON.stringify(inforOrder));
    }

    render() {
        const addToCart = {
            pathname: "/shoppingCart"
        };

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
                                    onChange={e => this.setState({ quantity: e.target.value })}
                                    id=""
                                />
                            </div>
                            <Link
                                onClick={this.addCart}
                                to={addToCart}
                                className="btn btn-light custom-btn custom-btn--detail add-cart-btn"
                                name=""
                                id="submit"
                                role="button"
                            >
                                Thêm vào giỏ hàng
                            </Link>
                            <img alt="" className="ml-1 mt-n2" src="../../asset/images/green-heart.png" />
                            <br />
                            <small>
                                Shipping &amp;<a href="#"> return</a>
                            </small>
                            <Link to="/">
                                <img
                                    alt=""
                                    className="col-lg-10 detail__img"
                                    src={process.env.PUBLIC_URL + "/images/" + "links.png"}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { productAdded: state.productAdded };
};

export default connect(mapStateToProps)(DetailInfo);
