import React, { Component } from "react";
import "../../../css/style.css";
import winBanner from "../../../images/win-banner.png";
import greenVera from "../../../images/green-vera.png";
import woman from "../../../images/woman.png";

class Jumpbotron extends Component {
    render() {
        return (
            <div className="jumbotron custom-jumbotron">
                <div className="container">
                    <div className="row mt-5 mt-sm-0 mt-md-3">
                        <div className="col-6 col-md-6">
                            <div className="row pt-5 pt-md-3 pt-lg-5">
                                <div className="col-12 col-sm-6 offset-sm-3 offset-lg-3">
                                    <img alt="" className="custom-jumbotron--win-banner" src={winBanner} />
                                </div>
                            </div>
                            <div className="content-banner">
                                <div className="row">
                                    <div className="col-12 col-sm-12 text-center">
                                        <img alt="" className="content-banner--green-vera" src={greenVera} />
                                        <p className="content-banner--des mb-0">
                                            Sản phẩm tinh dầu dưỡng da mới nhất của Madala
                                        </p>
                                        <p className="content-banner--price">GIÁ CHỈ 750.000đ</p>
                                        <a className="content-banner--buy" href="#">
                                            MUA HÀNG
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <img alt="" className="custom-jumbotron--woman" src={woman} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Jumpbotron;
