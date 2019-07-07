import React, { Component } from "react";
import MoreInfo from "./elements/MoreInfo";
import DetailInfo from "./elements/DetailInfo";
import Breadcrumb from "../../components/Breadcrumb";

export default class ProductDetail extends Component {
    render() {
        return (
            <div className="product-detail">
                <Breadcrumb />
                <DetailInfo dataOneProduct={this.props.location.params} />
                <MoreInfo />
            </div>
        );
    }
}
