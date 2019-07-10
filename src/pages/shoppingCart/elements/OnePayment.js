import React, { Component } from "react";
import DetailOnePay from "./DetailOnePay";

export default class OnePayment extends Component {
    renderProducts() {
        return (
            <table className="table table-borderless table-sm" style={{ marginBottom: "0" }}>
                <tr>
                    <td>
                        <strong>tên sản phẩm</strong>
                    </td>
                    <td>
                        <strong>số lượng</strong>
                    </td>
                    <td>
                        <strong>tổng</strong>
                    </td>
                </tr>
                <DetailOnePay productInfo={this.props.products} />
            </table>
        );
    }

    checkRenderHistory() {
        if (this.props.total !== 0) {
            return (
                <tr>
                    <td scope="row">{this.props.idProduct}</td>
                    <td>{this.props.total}đ</td>
                    <td>{this.renderProducts()}</td>
                    <td>{this.props.date}</td>
                </tr>
            );
        }
    }

    render() {
        return <tbody>{this.checkRenderHistory()}</tbody>;
    }
}
