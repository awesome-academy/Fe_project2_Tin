import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getOneUser } from "../../redux/actions/index";

class Account extends Component {
    componentDidMount() {
        this.props.getOneUser(2);
    }

    render() {
        return (
            <div className="container">
                {console.log(this.props.dataOneUser)}
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
                                    <input value={this.props.dataOneUser.username} onChange={e => ""} />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">email</th>
                                <td>{this.props.dataOneUser.email}</td>
                            </tr>
                            <tr>
                                <th scope="row">password</th>
                                <td type="password">{this.props.dataOneUser.password}</td>
                            </tr>
                        </table>
                    </div>
                    <div className="col-sm-2">
                        <Link to="/edit-account" class="btn btn-dark" role="button">
                            chỉnh sửa
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
    { getOneUser }
)(Account);
