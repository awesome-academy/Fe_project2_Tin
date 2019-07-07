import React, { Component } from "react";
import planeIcon from "../../../images/plane-icon.png";
import presentIcon from "../../../images/present-box-icon.png";
import phoneIcon from "../../../images/phone-icon.png";

class Perspect extends Component {
    render() {
        return (
            <div class="container">
                <div class="row text-center">
                    <div class="col-sm-4 pt-1 pt-sm-0 pb-2 pb-md-5 pb-lg-4">
                        <div class="row">
                            <div class="col-2 offset-1 offset-sm-0 col-sm-12">
                                <img src={planeIcon} alt="" />
                            </div>
                            <div class="col-7 col-sm-12">
                                <small>Miễn phí vận chuyển</small>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 pt-1 pt-sm-0 pb-2 pb-md-5 pb-lg-4">
                        <div class="row">
                            <div class="col-2 offset-1 offset-sm-0 col-sm-12">
                                <img src={presentIcon} alt="" />
                            </div>
                            <div class="col-7 col-sm-12">
                                <small>Nhận ngay quà tặng trị giá 350.000đ</small>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 pt-1 pt-sm-0 pb-2 pb-md-5 pb-lg-4">
                        <div class="row">
                            <div class="col-2 offset-1 offset-sm-0 col-sm-12">
                                <img src={phoneIcon} alt="" />
                            </div>
                            <div class="col-7 col-sm-12">
                                <small>Giảm 20% cho đơn hàng trên 5.000.000đ</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Perspect;
