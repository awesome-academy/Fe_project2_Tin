import React, { Component } from "react";

class Products extends Component {
    removeProduct = e => {
        const idProductRemove = parseInt(e.target.parentNode.parentNode.parentNode.id);

        this.props.removeProduct(idProductRemove);
    };

    render() {
        return (
            <tr id={this.props.id}>
                <td scope="row">
                    <img style={{ width: "25%" }} src={process.env.PUBLIC_URL + "/images/" + this.props.linkImage} />
                </td>
                <td style={{ verticalAlign: "middle" }}>{this.props.heading}</td>
                <td style={{ verticalAlign: "middle" }}>
                    <strong>{this.props.price}đ</strong>
                </td>
                <td style={{ verticalAlign: "middle" }}>{this.props.quantity}</td>
                <td style={{ verticalAlign: "middle" }}>
                    <strong>${this.props.price * this.props.quantity}đ</strong>
                </td>
                <td style={{ verticalAlign: "middle" }}>
                    <button className="btnDelete" onClick={this.removeProduct}>
                        <img src={process.env.PUBLIC_URL + "/images/" + "bin.png"} />
                    </button>
                </td>
            </tr>
        );
    }
}
export default Products;
