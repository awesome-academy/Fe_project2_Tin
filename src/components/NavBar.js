import React from "react";
import "../css/style.css";
import logo from "../images/logo.png";

class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light bg-light custom-nav">
                <div className="container">
                    <a className="navbar-brand custom-nav--brand" href="./homev2.html">
                        <img className="custom-nav--logo" src={logo} />
                    </a>
                    <button
                        className="navbar-toggler d-lg-none"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapsibleNavId"
                        aria-controls="collapsibleNavId"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mx-auto mt-2 mt-lg-0 custom-nav--list">
                            <li className="nav-item active">
                                <a className="nav-link" href="./homev2.html">
                                    Trang chủ<span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./aboutUs.html">
                                    Giới thiệu
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    id="navbarDropdown"
                                    href="#"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Sản phẩm
                                </a>
                                <div className="dropdown-menu custom-dropdown-menu" aria-labelledby="navbarDropdown">
                                    <div className="menu__item">
                                        <div className="menu__item--detail mr-5">
                                            <h6>DƯỠNG DA</h6>
                                            <hr />
                                            <ul className="list-unstyled text-muted text-lowercase font-weight-normal">
                                                <li>
                                                    <a href="./gird.html">Áo khoác</a>
                                                </li>
                                                <li>
                                                    <a href="./gird.html">Bộ áo liền quần</a>
                                                </li>
                                                <li>
                                                    <a href="./gird.html">Trang sức</a>
                                                </li>
                                                <li>
                                                    <a href="./gird.html">Quần/ váy</a>
                                                </li>
                                                <li>
                                                    <a href="./gird.html">Quần short</a>
                                                </li>
                                                <li>
                                                    <a href="./gird.html">Quần jean</a>
                                                </li>
                                                <li>
                                                    <a href="./gird.html">Đồ đan</a>
                                                </li>
                                                <li>
                                                    <a href="./gird.html">Áo nỉ</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="menu__item--detail ml-5 mr-5">
                                            <h6>DƯỠNG DA</h6>
                                            <hr />
                                            <ul className="list-unstyled text-muted text-lowercase font-weight-normal">
                                                <li>
                                                    <a href="#">Áo cánh/ áo sơ mi</a>
                                                </li>
                                                <li>
                                                    <a href="#">Túi sách, balo</a>
                                                </li>
                                                <li>
                                                    <a href="#">Khăn choàng cổ</a>
                                                </li>
                                                <li>
                                                    <a href="#">Hats &amp; Gloves</a>
                                                </li>
                                                <li>
                                                    <a href="#">Vớ &amp; socks</a>
                                                </li>
                                                <li>
                                                    <a href="#">Jewerly</a>
                                                </li>
                                                <li>
                                                    <a href="#">Bị bảo vệ</a>
                                                </li>
                                                <li>
                                                    <a href="#">Giày thể thao</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="menu__item--detail ml-5">
                                            <h6>DƯỠNG DA</h6>
                                            <hr />
                                            <ul className="list-unstyled text-muted text-lowercase font-weight-normal">
                                                <li>
                                                    <a href="#">Áo khoác</a>
                                                </li>
                                                <li>
                                                    <a href="#">Bộ áo liền quần</a>
                                                </li>
                                                <li>
                                                    <a href="#">Dresses</a>
                                                </li>
                                                <li>
                                                    <a href="#">Quần/ váy</a>
                                                </li>
                                                <li>
                                                    <a href="#">Quần short</a>
                                                </li>
                                                <li>
                                                    <a href="#">Quần jean</a>
                                                </li>
                                                <li>
                                                    <a href="#">Đồ đan</a>
                                                </li>
                                                <li>
                                                    <a href="#">Áo nhập khẩu</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Tin tức<span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./page404.html">
                                    Bản đồ
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./contactUs.html">
                                    Liên hệ
                                </a>
                            </li>
                        </ul>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link"
                                id="navbarDropdown"
                                href="#"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <i className="fas fa-shopping-cart custom-nav--cart mr-5 ml-5 mb-4" />
                            </a>
                            <div className="dropdown-menu custom-dropdown-menu" aria-labelledby="navbarDropdown">
                                <div className="menu__item menu__item--shoppingcart">
                                    <div className="menu__item--detail mb-4">
                                        <img className="mr-3 float-left" src="../../asset/images/man-spc.png" />
                                        <p className="float-left mr-2 mb-1">Áo sơ mi nam</p>
                                        <i className="fas fa-times" />
                                        <img className="float-left" src="../../asset/images/navbar-120k.png" />
                                    </div>
                                    <div className="menu__item--detail mb-4">
                                        <img className="mr-3 float-left" src="../../asset/images/man-spc.png" />
                                        <p className="float-left mr-2 mb-1">Áo sơ mi nam</p>
                                        <i className="fas fa-times" />
                                        <img className="float-left" src="../../asset/images/navbar-120k.png" />
                                    </div>
                                    <hr />
                                    <p className="float-left mr-5">Tổng số</p>
                                    <figure>
                                        <strong> 240.000 đ</strong>
                                    </figure>
                                    <a className="btn btn-dark custom-btn" name="" href="./shoppingCart.html" role="button">
                                        GIỎ HÀNG
                                    </a>
                                </div>
                            </div>
                        </li>
                        <form className="form-inline my-2 my-lg-0">
                            <a className="deco-a" href="#">
                                <i className="fas fa-search" />
                            </a>
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;
