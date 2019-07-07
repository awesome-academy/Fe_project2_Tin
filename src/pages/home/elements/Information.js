import React, { Component } from "react";
import elementHeader from "../../../images/element-info-header.png";
import logo from "../../../images/logo.png";
import blogImage from "../../../images/blog-image.png";

export default class Information extends Component {
    render() {
        return (
            <div className="information">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-4 text-center">
                            <h5 className="infomation--header">VỀ CHÚNG TÔI</h5>
                            <img alt="" className="mb-2 information--image" src={elementHeader} />
                            <img alt="" className="m-4" src={logo} alt="" />
                            <p className="text-left">
                                <strong>Giới thiệu chung về Mandala</strong>
                            </p>
                            <p className="information--p">
                                Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này
                                vào một ngày đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt. Hi, chào các
                                nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này vào một ngày
                                đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.sau khá nhiều lời hứa hão
                                thì hôm nay tớ quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi bức, khi mà dân tình
                                xô nhau đi tắm Free để giải nhiệt.
                            </p>
                            <a className="information--a" href="#">
                                Xem thêm
                            </a>
                        </div>
                        <div className="col-sm-6 col-md-4 text-center">
                            <h5 className="infomation--header">BLOG</h5>
                            <img alt="" className="mb-4 information--image" src={elementHeader} />
                            <img alt="" className="information--image--blog" src={blogImage} alt="" />
                            <p className="text-left">
                                <strong>Giới thiệu chung về Mandala</strong>
                            </p>
                            <p className="information--p">
                                Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này
                                vào một ngày đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.
                            </p>
                            <a className="information--a" href="#">
                                Xem thêm
                            </a>
                        </div>
                        <div className="col-sm-6 col-md-4 text-center">
                            <div className="row mt-5 mt-sm-0">
                                <div className="col-sm-12 col-md-12 text-center">
                                    <h5 className="infomation--header">GỬI EMAIL CHO CHÚNG TÔI</h5>
                                    <img alt="" className="mb-4 information--image" src={elementHeader} />
                                    <input className="custom-input" type="text" />
                                    <p className="mt-3 mt-sm-0">Gửi email để nhận ưu đãi mới nhất</p>
                                    <a className="btn btn-dark custom-btn pr-5 mb-4 pl-5" name="" id="" href="#" role="button">
                                        GỬI
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col-md-12 text-center">
                                    <h5 className="infomation--header">TAG SẢN PHẨM</h5>
                                    <img alt="" className="mb-4 information--image" src={elementHeader} />
                                    <a className="btn btn-light custom-btn mr-1" href="#">
                                        Đồng hồ
                                    </a>
                                    <a className="btn btn-light custom-btn mr-1" href="#" role="button">
                                        Túi
                                    </a>
                                    <a className="btn btn-light custom-btn mr-1" href="#" role="button">
                                        Phụ kiện
                                    </a>
                                    <a className="btn btn-light custom-btn mr-1" href="#" role="button">
                                        Sơ mi
                                    </a>
                                    <a className="btn btn-light custom-btn mr-1" href="#" role="button">
                                        Nước hoa
                                    </a>
                                    <a className="btn btn-light custom-btn mr-1" href="#" role="button">
                                        Trẻ em
                                    </a>
                                    {/* <a className="btn btn-light custom-btn mr-1" href="#" role="button">
                                        Váy nữ
                                    </a>
                                    <a className="btn btn-light custom-btn mr-1" href="#" role="button">
                                        Sandal
                                    </a>
                                    <a className="btn btn-light custom-btn mr-1" href="#" role="button">
                                        Thể thao
                                    </a>
                                    <a className="btn btn-light custom-btn mr-1" href="#" role="button">
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
