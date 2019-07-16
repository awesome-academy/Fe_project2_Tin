import React, { Component } from "react";

export default class DetailOnePay extends Component {
    renderDetailOnePay() {
        return this.props.productInfo.map(product => {
            return (
                <tr key={product.id}>
                    <td>
                        <small>{product.headingProduct}</small>
                    </td>
                    <td>
                        <small>{product.quantity}</small>
                    </td>
                    <td>
                        <small>{product.price * product.quantity}</small>
                    </td>
                </tr>
            );
        });
    }

    render() {
        return <tbody>{this.renderDetailOnePay()}</tbody>;
    }
}
