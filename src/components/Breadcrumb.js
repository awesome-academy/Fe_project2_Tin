import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

class Breadcrumb extends Component {
    render() {
        return (
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb custom-breadcrumb">
                    <div className="container">
                        <div className="row">
                            <li className="breadcrumb-item">
                                <Link to="/">Home</Link>
                            </li>
                            {/* <li className="breadcrumb-item">
                                <Link to="">Sản phẩm</Link>
                            </li> */}
                            <li className="breadcrumb-item">{this.props.path1}</li>
                        </div>
                        <hr />
                    </div>
                </ol>
            </nav>
        );
    }
}

export default Breadcrumb;
