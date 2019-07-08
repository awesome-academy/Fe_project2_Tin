import React, { Component } from "react";
import elementHeader from "../../../images/element-info-header.png";
import logo from "../../../images/logo.png";
import blogImage from "../../../images/blog-image.png";

export default class Information extends Component {
    render() {
        return (
            <div class="information">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-md-4 text-center">
                            <h5 class="infomation--header">VỀ CHÚNG TÔI</h5>
                            <img class="mb-2 information--image" src={elementHeader} />
                            <img class="m-4" src={logo} alt="" />
                            <p class="text-left">
                                <strong>Giới thiệu chung về Mandala</strong>
                            </p>
                            <p class="information--p">
                                Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này
                                vào một ngày đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt. Hi, chào các
                                nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này vào một ngày
                                đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.sau khá nhiều lời hứa hão
                                thì hôm nay tớ quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi bức, khi mà dân tình
                                xô nhau đi tắm Free để giải nhiệt.
                            </p>
                            <a class="information--a" href="#">
                                Xem thêm
                            </a>
                        </div>
                        <div class="col-sm-6 col-md-4 text-center">
                            <h5 class="infomation--header">BLOG</h5>
                            <img class="mb-4 information--image" src={elementHeader} />
                            <img class="information--image--blog" src={blogImage} alt="" />
                            <p class="text-left">
                                <strong>Giới thiệu chung về Mandala</strong>
                            </p>
                            <p class="information--p">
                                Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này
                                vào một ngày đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.
                            </p>
                            <a class="information--a" href="#">
                                Xem thêm
                            </a>
                        </div>
                        <div class="col-sm-6 col-md-4 text-center">
                            <div class="row mt-5 mt-sm-0">
                                <div class="col-sm-12 col-md-12 text-center">
                                    <h5 class="infomation--header">GỬI EMAIL CHO CHÚNG TÔI</h5>
                                    <img class="mb-4 information--image" src={elementHeader} />
                                    <input class="custom-input" type="text" />
                                    <p class="mt-3 mt-sm-0">Gửi email để nhận ưu đãi mới nhất</p>
                                    <a class="btn btn-dark custom-btn pr-5 mb-4 pl-5" name="" id="" href="#" role="button">
                                        GỬI
                                    </a>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12 col-md-12 text-center">
                                    <h5 class="infomation--header">TAG SẢN PHẨM</h5>
                                    <img class="mb-4 information--image" src={elementHeader} />
                                    <a class="btn btn-light custom-btn mr-1" href="#">
                                        Đồng hồ
                                    </a>
                                    <a class="btn btn-light custom-btn mr-1" href="#" role="button">
                                        Túi
                                    </a>
                                    <a class="btn btn-light custom-btn mr-1" href="#" role="button">
                                        Phụ kiện
                                    </a>
                                    <a class="btn btn-light custom-btn mr-1" href="#" role="button">
                                        Sơ mi
                                    </a>
                                    <a class="btn btn-light custom-btn mr-1" href="#" role="button">
                                        Nước hoa
                                    </a>
                                    <a class="btn btn-light custom-btn mr-1" href="#" role="button">
                                        Trẻ em
                                    </a>
                                    {/* <a class="btn btn-light custom-btn mr-1" href="#" role="button">
                                        Váy nữ
                                    </a>
                                    <a class="btn btn-light custom-btn mr-1" href="#" role="button">
                                        Sandal
                                    </a>
                                    <a class="btn btn-light custom-btn mr-1" href="#" role="button">
                                        Thể thao
                                    </a>
                                    <a class="btn btn-light custom-btn mr-1" href="#" role="button">
                                        Trang phụ biển
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
