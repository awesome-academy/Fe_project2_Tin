import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { getOneUser, editProfile } from "../../redux/actions/index";
class Edit extends Component {
    constructor() {
        super();
        this.state = {
            newUsername: "",
            newPassword: "",
            newEmail: ""
        };
    }

    saveChange = () => {
        this.props.editProfile(
            localStorage.getItem("idLogined"),
            this.state.newUsername,
            this.state.newPassword,
            this.state.newEmail
        );
    };

    componentDidMount() {
        this.props.getOneUser(localStorage.getItem("idLogined"));
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-8 col-md-3">
                        <h6 style={{ marginTop: "120px" }}>CHI TIẾT TÀI KHOẢN</h6>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-8">
                        <table className="table mt-5">
                            <tr>
                                <th>username</th>
                                <td>
                                    <input
                                        onChange={e => this.setState({ newUsername: e.target.value })}
                                        placeholder={this.props.dataOneUser.username}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">email</th>
                                <td>
                                    <input
                                        onChange={e => this.setState({ newEmail: e.target.value })}
                                        placeholder={this.props.dataOneUser.email}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">password</th>
                                <td type="password">
                                    <input
                                        onChange={e => this.setState({ newPassword: e.target.value })}
                                        placeholder={this.props.dataOneUser.password}
                                    />
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className="col-sm-2">
                        <Link to="/" onClick={this.saveChange} class="btn btn-dark" role="button">
                            Lưu
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { dataOneUser: state.dataOneUser };
};

export default connect(
    mapStateToProps,
    { getOneUser, editProfile }
)(Edit);
