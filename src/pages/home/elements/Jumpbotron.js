import React, { Component } from "react";
import "../../../css/style.css";
import winBanner from "../../../images/win-banner.png";
import greenVera from "../../../images/green-vera.png";
import woman from "../../../images/woman.png";

class Jumpbotron extends Component {
    render() {
        return (
            <div class="jumbotron custom-jumbotron">
                <div class="container">
                    <div class="row mt-5 mt-sm-0 mt-md-3">
                        <div class="col-6 col-md-6">
                            <div class="row pt-5 pt-md-3 pt-lg-5">
                                <div class="col-12 col-sm-6 offset-sm-3 offset-lg-3">
                                    <img class="custom-jumbotron--win-banner" src={winBanner} />
                                </div>
                            </div>
                            <div class="content-banner">
                                <div class="row">
                                    <div class="col-12 col-sm-12 text-center">
                                        <img class="content-banner--green-vera" src={greenVera} />
                                        <p class="content-banner--des mb-0">Sản phẩm tinh dầu dưỡng da mới nhất của Madala</p>
                                        <p class="content-banner--price">GIÁ CHỈ 750.000đ</p>
                                        <a class="content-banner--buy" href="#">
                                            MUA HÀNG
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <img class="custom-jumbotron--woman" src={woman} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Jumpbotron;
