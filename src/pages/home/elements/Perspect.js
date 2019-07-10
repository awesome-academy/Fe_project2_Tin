import React, { Component } from "react";
import planeIcon from "../../../images/plane-icon.png";
import presentIcon from "../../../images/present-box-icon.png";
import phoneIcon from "../../../images/phone-icon.png";

class Perspect extends Component {
    render() {
        return (
            <div className="container">
                <div className="row text-center">
                    <div className="col-sm-4 pt-1 pt-sm-0 pb-2 pb-md-5 pb-lg-4">
                        <div className="row">
                            <div className="col-2 offset-1 offset-sm-0 col-sm-12">
                                <img alt="" src={planeIcon} alt="" />
                            </div>
                            <div className="col-7 col-sm-12">
                                <small>Miễn phí vận chuyển</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 pt-1 pt-sm-0 pb-2 pb-md-5 pb-lg-4">
                        <div className="row">
                            <div className="col-2 offset-1 offset-sm-0 col-sm-12">
                                <img alt="" src={presentIcon} alt="" />
                            </div>
                            <div className="col-7 col-sm-12">
                                <small>Nhận ngay quà tặng trị giá 350.000đ</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 pt-1 pt-sm-0 pb-2 pb-md-5 pb-lg-4">
                        <div className="row">
                            <div className="col-2 offset-1 offset-sm-0 col-sm-12">
                                <img alt="" src={phoneIcon} alt="" />
                            </div>
                            <div className="col-7 col-sm-12">
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
