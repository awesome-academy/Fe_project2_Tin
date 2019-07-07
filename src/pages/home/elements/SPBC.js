import React, { Component } from "react";
import textSpbc from "../../../images/text-spbc.png";
import spbc1 from "../../../images/spbc-1.png";
import spbc2 from "../../../images/spbc-2.png";
import spbc3 from "../../../images/spbc-3.png";
import spbc4 from "../../../images/spbc-4.png";

export default class SPBC extends Component {
    render() {
        return (
            <div class="spbc">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-8 col-md-4 offset-sm-2 offset-md-4 text-center">
                            <img class="block-product__img" src={textSpbc} />
                        </div>
                    </div>
                    <div class="row mt-5 mb-5 pl-5 pl-sm-0">
                        <div class="col-6 col-sm-2">
                            <a href="./gird.html">Mỹ phẩm</a>
                        </div>
                        <div class="col-6 col-sm-2">
                            <a href="#">Quần áo</a>
                        </div>
                        <div class="col-6 col-sm-2">
                            <a href="#">Giày Sport</a>
                        </div>
                        <div class="col-6 col-sm-2">
                            <a href="#">Trang sức</a>
                        </div>
                        <div class="col-6 col-sm-2">
                            <a href="#">Nhẫn</a>
                        </div>
                        <div class="col-6 col-sm-2">
                            <a href="#">Heathy</a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card-deck text-center">
                                <div class="card custom-card mr-5">
                                    <img class="card-img-top mx-auto" style={{ width: "60%" }} src={spbc3} />
                                    <div class="card-body">
                                        <p class="card-title custom-card--title">
                                            <strong>
                                                <a href="./gird.html">Mỹ phẩm châu Âu</a>
                                            </strong>
                                        </p>
                                        <p class="card-text custom-card--text">355.000đ</p>
                                    </div>
                                </div>
                                <div class="card custom-card mr-5">
                                    <img class="card-img-top mx-auto" style={{ width: "60%" }} src={spbc4} />
                                    <div class="card-body">
                                        <p class="card-title custom-card--title">
                                            <strong>
                                                <a href="./gird.html">Mỹ phẩm châu Mỹ</a>
                                            </strong>
                                        </p>
                                        <p class="card-text custom-card--text">355.000đ</p>
                                    </div>
                                </div>
                                <div class="card custom-card mr-5 d-none d-md-block">
                                    <img class="card-img-top mx-auto" style={{ width: "60%" }} src={spbc1} />
                                    <div class="card-body">
                                        <p class="card-title custom-card--title">
                                            <strong>
                                                <a href="./gird.html">Mỹ phẩm châu Á</a>
                                            </strong>
                                        </p>
                                        <p class="card-text custom-card--text">355.000đ</p>
                                    </div>
                                </div>
                                <div class="card custom-card mr-5 d-none d-md-block">
                                    <img class="card-img-top mx-auto" style={{ width: "60%" }} src={spbc2} />
                                    <div class="card-body">
                                        <p class="card-title custom-card--title">
                                            <strong>
                                                <a href="./gird.html">Mỹ phẩm Hàn Quóc</a>
                                            </strong>
                                        </p>
                                        <p class="card-text custom-card--text">355.000đ</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
