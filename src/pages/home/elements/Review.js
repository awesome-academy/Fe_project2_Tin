import React, { Component } from "react";
import clientPhoto from "../../../images/client-photo.png";

export default class Review extends Component {
    render() {
        return (
            <div className="review">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10">
                            <div className="content">
                                <div className="carousel slide" id="carouselId" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li className="active" data-target="#carouselId" data-slide-to="0" />
                                        <li data-target="#carouselId" data-slide-to="1" />
                                        <li data-target="#carouselId" data-slide-to="2" />
                                    </ol>
                                    <div className="carousel-inner" role="listbox">
                                        <div className="carousel-item active">
                                            <div className="row">
                                                <div className="col-sm-2">
                                                    <img className="review__image" src={clientPhoto} alt="First slide" />
                                                </div>
                                                <div className="col-sm-10">
                                                    <div className="carousel-caption text-left ml-5 custom-caption">
                                                        <p className="para">
                                                            “ Vẫn là vẻ bề ngoài vô cùng đơn giản với các tông màu trắng nhưng
                                                            lại tạo ra sức hấp dẫn mạnh mẽ, với những công nghệ được cải tiến
                                                            nhất. "<br />
                                                            <strong>- Bill Gate -</strong>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-sm-2">
                                                        <img className="review__image" src={clientPhoto} alt="First slide" />
                                                    </div>
                                                    <div className="col-sm-10">
                                                        <div className="carousel-caption text-left ml-5 custom-caption">
                                                            <p className="para">
                                                                “ Vẫn là vẻ bề ngoài vô cùng đơn giản với các tông màu trắng
                                                                nhưng lại tạo ra sức hấp dẫn mạnh mẽ, với những công nghệ được
                                                                cải tiến nhất. "<br />
                                                                <strong>- Bill Gate -</strong>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselId" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true" />
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
