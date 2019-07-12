import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { getUser } from "../../../redux/actions/index";
class FormSignIn extends Component {
    state = {
        username: "",
        password: ""
    };

    signIn = e => {
        e.preventDefault();
        this.props.getUser(this.state.username, this.state.password);
    };

    render() {
        if (this.props.auth === true) {
            alert("Đăng nhập thành công!");
            localStorage.setItem(
                "userLogined",
                JSON.stringify({
                    login: true,
                    user: [this.state.username, this.state.password],
                    dataOrder: []
                })
            );
            return <Redirect to="/" push />;
        }
        return (
            <div className="container">
                {localStorage.clear()}
                <div className="row">
                    <div className="col-md-12 pl-0 pr-0 mb-5">
                        <div className="form-group custom-form">
                            <h6>KHÁCH HÀNG ĐĂNG KÝ</h6>
                            <p>Nếu bạn có một tài khoản xin vui lòng đăng nhập</p>
                            <br />
                            <form onSubmit={this.signIn}>
                                <label>Tên đăng nhập*</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name=""
                                    id=""
                                    aria-describedby="helpId"
                                    onChange={e => this.setState({ username: e.target.value })}
                                />
                                <label>Password*</label>
                                <input
                                    className="form-control mb-3"
                                    type="text"
                                    name=""
                                    id=""
                                    aria-describedby="helpId"
                                    onChange={e => this.setState({ password: e.target.value })}
                                />
                                <br />
                                <Link className="text-muted" to="/sign-up">
                                    Quên mật khẩu
                                </Link>
                                <button
                                    className="btn btn-dark custom-btn ml-4"
                                    name=""
                                    id=""
                                    role="button"
                                    type="submit"
                                    onClick={() => this.signIn}
                                >
                                    ĐĂNG NHẬP
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { auth: state.auth };
};
export default connect(
    mapStateToProps,
    { getUser }
)(FormSignIn);
