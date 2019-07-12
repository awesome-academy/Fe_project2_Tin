import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import pay from "../images/pay.png";
import SignIn from "../pages/signin/SignIn";
class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <ul className="text list-unstyled text-muted">
                                <li>
                                    <strong>LIÊN HỆ VỚI CHÚNG TÔI</strong>
                                </li>
                                <li>tầng 4, tòa nhà Hanoi Group Số 442 Hàng Giấy, Quận Hoàn Kiếm, Thành phố Hà Nội</li>
                                <li>(04) 6674 2332 - (04) 5785 2015</li>
                                <li>(04) 6674 2332 - Tinphamtp@gmail.com</li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <ul className="text list-unstyled text-muted">
                                <li>
                                    <strong>CHUYỂN HÀNG</strong>
                                </li>
                                <li>Mua sắm trực tuyến</li>
                                <li>Chính sách vận chuyển</li>
                                <li>Chính sách người dùng</li>
                                <li>Thông tin vận chuyển</li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <ul className="text list-unstyled text-muted">
                                <li>
                                    <strong>HỖ TRỢ</strong>
                                </li>
                                <li>Our story</li>
                                <li>Thanh toán an toàn</li>
                                <li>Thanh toán nhanh</li>
                                <li>Chính sách vận chuyển</li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <ul className="text list-unstyled text-muted">
                                <li>
                                    <strong>THÔNG TIN</strong>
                                </li>
                                <li>Về chúng tôi</li>
                                <li>Điều khoản &amp; điều kiện</li>
                                <li>Điều khoản &amp; yêu cầu</li>
                                <li>Đơn đặt hàng</li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <ul className="text list-unstyled text-muted">
                                <li>
                                    <strong>MY ACCOUNT</strong>
                                </li>
                                <li>
                                    <Link className="text-muted" to="/shoppingCart">
                                        Giỏ hàng
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-muted" to="/sign-in">
                                        My account
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-muted" to="/sign-up">
                                        Đăng ký tài khoản
                                    </Link>
                                </li>
                                <li>
                                    {localStorage.getItem(`userLogined`) == undefined ? (
                                        <Link className="text-muted" to="/sign-in">
                                            Đăng nhập
                                        </Link>
                                    ) : (
                                        <Link className="text-muted" to="/sign-out">
                                            Đăng xuất
                                        </Link>
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="pay">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <p className="para para--pay">CopyRight@ 2015 - 2019 | Danang Sun-asterisk</p>
                            </div>
                            <div className="col-6 col-md-3 offset-md-2 offset-lg-3">
                                <Link to="/sign-in">
                                    <img className="shoppingCart--img" src={pay} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
