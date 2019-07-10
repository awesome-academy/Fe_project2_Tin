import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Products from "./Products";

export default class tableOrder extends Component {
    constructor() {
        super();
        this.state = { productInCart: [] };
        this.removeProduct = this.removeProduct.bind(this);
    }

    componentDidMount() {
        const listDetailProduct = JSON.parse(localStorage.getItem("userLogined")).dataOrder;
        this.setState(prevState => ({
            productInCart: listDetailProduct
        }));
    }
    componentDidUpdate() {}

    removeProduct(id) {
        this.state.productInCart.forEach(product => {
            if (parseInt(product.idProduct) === id) {
                this.setState({ productInCart: this.state.productInCart.filter(e => e !== product) });
            }
        });
    }

    renderProducts() {
        const listDetailProduct = this.state.productInCart;
        return listDetailProduct.map(product => {
            return (
                <Products
                    id={product.idProduct}
                    key={product.headingProduct}
                    price={product.price}
                    heading={product.headingProduct}
                    linkImage={product.linkImage}
                    quantity={product.quantity}
                    removeProduct={this.removeProduct}
                />
            );
        });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2 px-0 offset-sm-3">
                            <div className="progress progress__cart">
                                <span className="badge badge-success">Thông tin giỏ hàng</span>
                            </div>
                        </div>
                        <div className="col-sm-2 px-0">
                            <div className="progress progress__information">
                                <span className="badge badge-light">Thông tin đơn hàng</span>
                            </div>
                        </div>
                        <div className="col-sm-2 px-0">
                            <div className="progress progress__payment">
                                <span className="badge badge-light">Thanh toán & đặt mua</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2">
                            <h4 className="para">GIỎ HÀNG</h4>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <table className="table text-center custom-table">
                                <thead className="custom-thead">
                                    <tr>
                                        <th id="photo">ẢNH</th>
                                        <th id="name-product">TÊN SẢN PHẨM</th>
                                        <th id="price">GIÁ</th>
                                        <th id="number">SỐ LƯỢNG</th>
                                        <th id="sum">TỔNG SỐ</th>
                                        <th id="remove">XÓA</th>
                                    </tr>
                                </thead>
                                <tbody className="products">
                                    {this.state.productInCart.length === 0 ? (
                                        <tr>
                                            <td />
                                            <td />
                                            <td>
                                                <img src={process.env.PUBLIC_URL + "/images/" + "emptyCart.png"} />
                                            </td>
                                            <td />
                                            <td />
                                            <td />
                                        </tr>
                                    ) : (
                                        this.renderProducts()
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 offset-md-8 mb-5">
                            <div className="option">
                                <Link to="/" className="btn btn-dark custom-btn custom-btn mr-1" role="button">
                                    TIẾP TỤC MUA HÀNG
                                </Link>
                                <button className="btn btn-dark custom-btn mr-1" id="delete-cart" href="#" role="button">
                                    XÓA
                                </button>
                                <Link className="btn btn-dark custom-btn custom-btn--update" role="button">
                                    CẬP NHẬT (THANH TOÁN)
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
