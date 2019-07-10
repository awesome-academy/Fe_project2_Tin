import React, { Component } from "react";
import { Redirect, Route, Link } from "react-router-dom";

export default class SignOut extends Component {
    yes() {
        localStorage.clear();
        alert("Đã đăng xuất");
        window.location.reload();
    }

    no() {
        return <Redirect to="/" push />;
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row text-center" style={{ marginTop: "200px" }}>
                        <div className="col-sm-12">
                            <h4 className="mb-5">Bạn muốn đăng xuất ?</h4>
                            <button type="button" class="btn btn-dark mx-2 px-5 mb-5" onClick={this.yes}>
                                YES
                            </button>
                            <Link to="/" type="button" class="btn btn-dark mx-2 px-5 mb-5" onClick={this.no}>
                                NO
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
