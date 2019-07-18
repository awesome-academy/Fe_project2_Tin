import React, { Component } from "react";
import MoreInfo from "./elements/MoreInfo";
import DetailInfo from "./elements/DetailInfo";
import Breadcrumb from "../../components/Breadcrumb";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default class ProductDetail extends Component {
    render() {
        return (
            <div className="product-detail">
                <NavBar />
                <Breadcrumb />
                <DetailInfo dataOneProduct={this.props.location.params} />
                <MoreInfo />
                <Footer />
            </div>
        );
    }
}
