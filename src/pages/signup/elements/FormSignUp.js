import React, { Component } from "react";

class FormSignUp extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2">
                            <h4 className="para">ĐĂNG KÝ</h4>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="wrap-form mb-5">
                                <div className="form-group custom-form">
                                    <h6>THÔNG TIN CÁ NHÂN</h6>
                                    <label for="">Tên trước*</label>
                                    <input className="form-control" type="text" name="" id="" aria-describedby="helpId" />
                                    <label for="">Tên sau*</label>
                                    <input className="form-control" type="text" name="" id="" aria-describedby="helpId" />
                                    <label for="">Email*</label>
                                    <input className="form-control" type="text" name="" id="" aria-describedby="helpId" />
                                    <label for="">Password*</label>
                                    <input className="form-control mb-3" type="text" name="" id="" aria-describedby="helpId" />
                                    <hr />
                                    <h6>THÔNG TIN CÁ NHÂN</h6>
                                    <label for="">Mật khẩu*</label>
                                    <input className="form-control" type="text" name="" id="" aria-describedby="helpId" />
                                    <label for="">Xác nhận mật khẩu*</label>
                                    <input className="form-control" type="text" name="" id="" aria-describedby="helpId" />
                                </div>
                                <div className="row">
                                    <div className="col-sm-2 mr-auto">
                                        <a className="btn btn-dark custom-btn pr-4 pl-4 mt-2" href="#" role="button">
                                            GỬI
                                        </a>
                                    </div>
                                    <div className="col-sm-2">
                                        <a className="btn btn-dark custom-btn pr-4 pl-4 mt-2" href="#" role="button">
                                            ⇐ QUAY LẠI
                                        </a>
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

export default FormSignUp;
