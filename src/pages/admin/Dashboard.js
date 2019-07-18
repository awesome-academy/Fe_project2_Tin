import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import AllUsers from "./elements/AllUsers";

class Dashboard extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <nav className="col-md-2  bg-dark sidebar">
                        <div className="sidebar-sticky">
                            <Link to={AllUsers} className="sidebar-heading d-flex px-3 mt-4 mb-4 text-muted">
                                <span>
                                    <i class="fa fa-user-circle mr-3" aria-hidden="true" />
                                </span>
                                ALl users
                            </Link>
                            <Link className="sidebar-heading d-flex px-3 mt-4 mb-4 text-muted">
                                <span>
                                    <i class="fab fa-product-hunt mr-3" />
                                </span>
                                Products
                            </Link>
                            <Link className="sidebar-heading d-flex px-3 mt-4 mb-4 text-muted">
                                <span>
                                    <i class="fas fa-chart-area mr-3" />
                                </span>
                                statistic
                            </Link>
                            <Link className="sidebar-heading d-flex px-3 mt-4 mb-4 text-muted">
                                <span>
                                    <i class="fas fa-flag mr-3" />
                                </span>
                                current month
                            </Link>
                            <Link className="sidebar-heading d-flex px-3 mt-4 mb-4 text-muted">
                                <span>
                                    <i class="fas fa-share-alt-square mr-3" />
                                </span>
                                Saved reports
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}
export default Dashboard;
