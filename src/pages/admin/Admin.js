import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAdmin, getAllAdmin } from "../../redux/actions/index";

class Admin extends Component {
    constructor() {
        super();
        this.state = { adminname: "", password: "" };
        this.findID = this.findID.bind(this);
    }

    componentDidMount() {
        this.props.getAllAdmin();
    }

    signIn = e => {
        e.preventDefault();
        this.props.getAdmin(this.state.adminname, this.state.password);
        this.findID();
    };

    findID() {
        this.props.allAdmin.forEach(admin => {
            if (admin.adminname === this.state.adminname) {
                localStorage.setItem("adminLogined", admin.id);
                return;
            }
        });
    }

    render() {
        if (this.props.authAdmin === true) {
            alert("Đăng nhập thành công!");
            localStorage.removeItem("userLogined");
            localStorage.setItem(
                "adminLogined",
                JSON.stringify({
                    login: true,
                    admin: [this.state.adminname, this.state.password]
                })
            );
            return <Redirect to="/dashboard" />;
        }
        return (
            <div class="container">
                <div class="row text-center">
                    <div class="col-sm-12 ml-n3 mt-5 mb-5">
                        <h2>Xin chào Admin</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="offset-4 col-4">
                        <form onSubmit={this.signIn}>
                            <label>Tên đăng nhập</label>
                            <input
                                className="form-control mb-2"
                                type="text"
                                onChange={e => this.setState({ adminname: e.target.value })}
                            />
                            <label>Password</label>
                            <input
                                className="form-control mb-3"
                                type="text"
                                onChange={e => this.setState({ password: e.target.value })}
                            />
                            <br />

                            <button
                                className="btn btn-dark custom-btn text-center"
                                role="button"
                                type="submit"
                                onClick={e => this.signIn}
                            >
                                ĐĂNG NHẬP
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { authAdmin: state.authAdmin, allAdmin: state.allAdmin };
};

export default connect(
    mapStateToProps,
    { getAdmin, getAllAdmin }
)(Admin);
