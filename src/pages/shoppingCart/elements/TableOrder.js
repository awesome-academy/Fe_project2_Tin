import React, { Component } from "react";
import { Link } from "react-router-dom";
import Products from "./Products";
import { connect } from "react-redux";
import { getHistory, updateHistory } from "../../../redux/actions/index";
import HistoryPayment from "./HistoryPayment";

class TableOrder extends Component {
    constructor() {
        super();
        this.state = {
            productInCart: [],
            totalInCart: 0
        };
        this.removeProduct = this.removeProduct.bind(this);
    }

    componentDidMount() {
        let total = 0;
        const listDetailProduct = JSON.parse(localStorage.getItem("userLogined")).dataOrder;
        this.setState({ productInCart: listDetailProduct });
        listDetailProduct.forEach(product => {
            total = total + product.price * product.quantity;
            return total;
        });
        this.setState({ totalInCart: total });
    }
    removeProduct(id) {
        this.state.productInCart.forEach(product => {
            if (parseInt(product.idProduct) === id) {
                this.setState({ productInCart: this.state.productInCart.filter(e => e !== product) });
            }
        });
        const dataOrder = JSON.parse(localStorage.getItem("userLogined")).dataOrder;
        const login = JSON.parse(localStorage.getItem("userLogined")).login;
        const user = JSON.parse(localStorage.getItem("userLogined")).user;
        for (let i = 0; i < dataOrder.length; i++) {
            if (parseInt(dataOrder[i].idProduct) === id) {
                dataOrder.splice(i, 1);
            }
        }
        localStorage.setItem(
            "userLogined",
            JSON.stringify({
                login: login,
                user: user,
                dataOrder: dataOrder
            })
        );
    }
    ctrlPay = () => {
        const idUser = parseInt(localStorage.getItem("idLogined"));
        this.props.getHistory(idUser);
    };

    updateHistory = () => {
        const newPay = {
            id: this.props.history.pays.length + 1,
            total: this.state.totalInCart,
            products: [...this.state.productInCart],
            date: "19-07-2019"
        };
        const pays = this.props.history.pays;
        pays.push(newPay);
        const idUser = parseInt(localStorage.getItem("idLogined"));
        this.props.updateHistory(idUser, pays);
        const tempUser = JSON.parse(localStorage.getItem("userLogined")).user;
        localStorage.setItem("userLogined", JSON.stringify({ login: true, user: tempUser, dataOrder: [] }));
    };

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
                                        <tr className="table-borderless">
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
                                <button
                                    id="pay"
                                    onClick={this.ctrlPay}
                                    className="btn btn-dark custom-btn custom-btn--update"
                                    role="button"
                                >
                                    CẬP NHẬT (THANH TOÁN)
                                </button>
                            </div>
                        </div>
                    </div>
                    <HistoryPayment dataHistory={this.props.history} />

                    {this.props.history !== null ? this.updateHistory() : "FAIL "}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { history: state.history };
};

export default connect(
    mapStateToProps,
    { getHistory, updateHistory }
)(TableOrder);
