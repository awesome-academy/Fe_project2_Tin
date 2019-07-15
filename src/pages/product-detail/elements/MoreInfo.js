import React, { Component } from "react";
import spDetail1 from "../../../images/sp-detail1.png";
import spDetail2 from "../../../images/sp-detail2.png";
import spDetail3 from "../../../images/sp-detail3.png";
import spDetail4 from "../../../images/sp-detail4.png";
import asideImg from "../../../images/aside-img.png";
import asidePrice from "../../../images/aside-price.png";
import heart4 from "../../../images/4heart.png";
import ListRecentlyProduct from "./ListRecentlyProduct";

export default class MoreInfo extends Component {
    render() {
        return (
            <article>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <a className="mr-4 detail__deco-a" href="#">
                                <strong> ĐẶC ĐIỂM NỔI BẬT</strong>
                            </a>
                            <a className="mr-4 detail__deco-a" href="#">
                                <strong>THÔNG TIN SẢN PHẨM</strong>
                            </a>
                            <a className="detail__deco-a" href="#">
                                <strong>ĐÁNH GIÁ</strong>
                            </a>
                            <hr />
                        </div>

                        {/* COMPONENT RECENTLY VIEWED PRODUCTS        */}

                        <div className="col-md-3 d-none d-lg-block">
                            <a className="detail__deco-a" href="#">
                                <strong>ĐÃ XEM GẦN ĐÂY</strong>
                            </a>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="row align-items-center">
                                <div className="col-10 col-md-8 order-2 order-md-1">
                                    <a className="mb-3 border-bottom detail__deco-a" href="./blogDetail.html">
                                        THE MARK OF THE LEGEND
                                    </a>
                                    <p className="para para--detail">
                                        Tự hào được ghi là năm mà Tiffany & Co là thành lập, bộ sưu tập mang tính biểu tượng này
                                        cung cấp cho một cái gật đầu với qua trong khi thể hiện một cảm giác hiện đại với kiểu
                                        dáng đẹp đường cong và đường nét mượt mà.
                                    </p>
                                </div>
                                <div className="col-md-4 mb-3 mb-md-3 order-1 order-md-2">
                                    <img alt="" className="detail__img" src={spDetail1} />
                                </div>
                            </div>
                            <div className="row align-items-center ml-auto">
                                <div className="col-10 offset-2 offset-sm-0 col-md-8 order-2 mb-5 text-right text-sm-left">
                                    <a className="mb-3 border-bottom detail__deco-a" href="./blogDetail.html">
                                        THE MARK OF THE LEGEND
                                    </a>
                                    <p className="para para--detail">
                                        Tự hào được ghi là năm mà Tiffany & Co là thành lập, bộ sưu tập mang tính biểu tượng này
                                        cung cấp cho một cái gật đầu với qua trong khi thể hiện một cảm giác hiện đại với kiểu
                                        dáng đẹp đường cong và đường nét mượt mà.
                                    </p>
                                </div>
                                <div className="col-10 offset-2 offset-sm-0 col-md-4 mb-3 mb-md-3 order-1 order-md-1">
                                    <img alt="" className="detail__img" src={spDetail2} />
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-10 col-md-8 order-2 order-md-1">
                                    <a className="mb-3 border-bottom detail__deco-a" href="./blogDetail.html">
                                        THE MARK OF THE LEGEND
                                    </a>
                                    <p className="para para--detail">
                                        Tự hào được ghi là năm mà Tiffany & Co là thành lập, bộ sưu tập mang tính biểu tượng này
                                        cung cấp cho một cái gật đầu với qua trong khi thể hiện một cảm giác hiện đại với kiểu
                                        dáng đẹp đường cong và đường nét mượt mà.
                                    </p>
                                </div>
                                <div className="col-md-4 mb-4 mb-md-3 order-1 order-md-2">
                                    <img alt="" className="detail__img" src={spDetail3} />
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-md-8 order-2 text-right text-sm-left">
                                    <a className="mb-3 border-bottom detail__deco-a" href="./blogDetail.html">
                                        THE MARK OF THE LEGEND
                                    </a>
                                    <p className="para para--detail">
                                        Tự hào được ghi là năm mà Tiffany & Co là thành lập, bộ sưu tập mang tính biểu tượng này
                                        cung cấp cho một cái gật đầu với qua trong khi thể hiện một cảm giác hiện đại với kiểu
                                        dáng đẹp đường cong và đường nét mượt mà.
                                    </p>
                                </div>
                                <div className="col-10 offset-2 offset-sm-0 col-md-4 order-1 mb-2 mb-md-3">
                                    <img alt="" className="detail__img" src={spDetail4} />
                                </div>
                            </div>
                            <div
                                class="fb-comments"
                                data-href="http://localhost:3001/product-detail"
                                data-width=""
                                data-numposts="5"
                            />
                        </div>

                        {/* COMPONENT RECENTLY VIEWED PRODUCTS        */}

                        <div className="col-md-3 d-none d-lg-block">
                            <ListRecentlyProduct />
                            <hr />

                            {/* ============================================= */}

                            <div className="row">
                                <div className="col-12 d-none d-lg-block">
                                    <a className="detail__deco-a" href="#">
                                        <strong>SẢN PHẨM BÁN CHẠY</strong>
                                    </a>
                                    <br />
                                </div>
                            </div>
                            <hr />
                            <div className="row mb-4">
                                <div className="col-6">
                                    <img alt="" className="detail__img" src={asideImg} />
                                </div>
                                <div className="pl-0 pr-0 col-6">
                                    <a className="detail__deco-a" href="#">
                                        <strong> Mỹ phẩm Châu Âu</strong>
                                    </a>
                                    <img alt="" className="detail__img" src={heart4} />
                                    <img alt="" src={asidePrice} />
                                </div>
                            </div>
                            <hr />
                            <div className="row mb-4">
                                <div className="col-6">
                                    <img alt="" className="detail__img" src={asideImg} />
                                </div>
                                <div className="pl-0 pr-0 col-6">
                                    <a className="detail__deco-a" href="#">
                                        <strong> Mỹ phẩm Châu Âu</strong>
                                    </a>
                                    <img alt="" className="detail__img" src={heart4} />
                                    <img alt="" src={asidePrice} />
                                </div>
                            </div>
                            <hr />
                            <div className="row mb-4">
                                <div className="col-6">
                                    <img alt="" className="detail__img" src={asideImg} />
                                </div>
                                <div className="pl-0 pr-0 col-6">
                                    <a className="detail__deco-a" href="#">
                                        <strong> Mỹ phẩm Châu Âu</strong>
                                    </a>
                                    <img alt="" className="detail__img" src={heart4} />
                                    <img alt="" src={asidePrice} />
                                </div>
                            </div>
                            <hr />
                            <div className="row mb-4">
                                <div className="col-6">
                                    <img alt="" className="detail__img" src={asideImg} />
                                </div>
                                <div className="pl-0 pr-0 col-6">
                                    <a className="detail__deco-a" href="#">
                                        <strong> Mỹ phẩm Châu Âu</strong>
                                    </a>
                                    <img alt="" className="detail__img" src={heart4} />
                                    <img alt="" src={asidePrice} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        );
    }
}
