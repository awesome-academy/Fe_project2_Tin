import React, { Component } from "react";
import OnePayment from "./OnePayment";

class HistoryPayment extends Component {
    renderPayment = () => {
        return this.props.dataHistory.pays.map(pay => {
            return <OnePayment key={pay.id} idProduct={pay.id} total={pay.total} products={pay.products} date={pay.date} />;
        });
    };

    renderHistory() {
        if (this.props.dataHistory !== null) {
            return (
                <div className="history-payment">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <h4>Lịch sử mua hàng</h4>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>ID đơn hàng</th>
                                            <th>tổng hóa đơn</th>
                                            <th>sản phẩm chi tiết</th>
                                            <th>thời gian thanh toán</th>
                                        </tr>
                                    </thead>
                                    {this.renderPayment()}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }

    render() {
        return <div>{this.renderHistory()}</div>;
    }
}

export default HistoryPayment;
