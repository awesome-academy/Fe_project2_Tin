import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllUser, signupAccount } from "../../../redux/actions/index";

class FormSignUp extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            email: "",
            passwordConfirm: ""
        };
        this.registry = this.registry.bind(this);
    }

    componentDidMount() {
        this.props.getAllUser();
    }

    registry() {
        if (
            this.state.username === "" ||
            this.state.password === "" ||
            this.state.email === "" ||
            this.state.passwordConfirm === ""
        ) {
            alert("Vui lòng nhập đủ thông tin!");
        }
        if (this.state.password !== this.state.passwordConfirm) {
            alert("Vui lòng nhập lại đúng mật khẩu  ");
        }
        if (
            this.state.username !== "" &&
            this.state.password !== "" &&
            this.state.email !== "" &&
            this.state.passwordConfirm !== "" &&
            this.state.password === this.state.passwordConfirm
        ) {
            for (let i = 0; i < this.props.dataUsers.length; i++) {
                if (this.props.dataUsers[i].username === this.state.username) {
                    alert("Vui lòng chọn tên đăng nhập khác");
                    return;
                }
            }
            const newAccount = {
                id: this.props.dataUsers.length + 1,
                username: this.state.username,
                password: this.state.password,
                email: this.state.email,
                dataOrder: []
            };
            this.props.signupAccount(newAccount);
        }
        alert("Đăng ký thành công !");
    }

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
                                    <label>Tên đăng nhập*</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        onChange={e => this.setState({ username: e.target.value })}
                                    />
                                    <label>Email*</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        onChange={e => this.setState({ email: e.target.value })}
                                    />
                                    <label>Password*</label>
                                    <input
                                        className="form-control mb-3"
                                        type="text"
                                        onChange={e => this.setState({ password: e.target.value })}
                                    />
                                    <hr />
                                    <label>Xác nhận mật khẩu*</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        onChange={e => this.setState({ passwordConfirm: e.target.value })}
                                    />
                                </div>
                                <div className="row">
                                    <div className="col-sm-2 mr-auto">
                                        <button
                                            onClick={this.registry}
                                            type="button"
                                            className="btn btn-dark custom-btn pr-4 pl-4 mt-2"
                                        >
                                            GỬI
                                        </button>
                                    </div>
                                    <div className="col-sm-2">
                                        <a className="btn btn-dark custom-btn pr-4 pl-4 mt-2" href="#">
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

const mapStateToProps = state => {
    return { dataUsers: state.allUser };
};

export default connect(
    mapStateToProps,
    { getAllUser, signupAccount }
)(FormSignUp);
