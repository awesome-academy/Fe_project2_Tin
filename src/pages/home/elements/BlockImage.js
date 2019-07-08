import React, { Component } from "react";
import square1 from "../../../images/square-1.png";
import square2 from "../../../images/square-2.png";
import square3 from "../../../images/square-3.png";
import square4 from "../../../images/square-4.png";
import square5 from "../../../images/square-5.png";
import square6 from "../../../images/square-6.png";
import square7 from "../../../images/square-7.png";
import square8 from "../../../images/square-8.png";
import square9 from "../../../images/square-9.png";
import square10 from "../../../images/square-10.png";

export default class BlockImage extends Component {
    render() {
        return (
            <div class="block-product">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="block4">
                                <div class="row pb-2">
                                    <div class="col-6 px-sm-0">
                                        <img id="block1" src={square1} />
                                    </div>
                                    <div class="col-6 px-0">
                                        <img class="ml-n4 ml-sm-n1 ml-md-n2 ml-lg-n3" id="block2" src={square2} />
                                    </div>
                                </div>
                                <div class="row pb-3 pb-sm-2">
                                    <div class="col-6 px-sm-0">
                                        <img class="block4--square-up" id="block3" src={square3} />
                                    </div>
                                    <div class="col-6 px-sm-0">
                                        <img class="block-product__img ml-n4 ml-sm-2" id="block4" src={square4} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 pb-3 pb-sm-2">
                            <img id="block5" src={square5} />
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row mb-3">
                        <div class="col-sm-6 pl-3 pl-sm-0 pb-3">
                            <img class="block-product__big ml-1 ml-sm-0" id="block6" src={square6} />
                        </div>
                        <div class="col-sm-6">
                            <div class="block4">
                                <div class="row pb-2">
                                    <div class="col-6 px-sm-0">
                                        <img class="ml-0 ml-sm-3" id="block7" src={square7} />
                                    </div>
                                    <div class="col-6 px-sm-0">
                                        <img class="block4--square-down ml-n4 ml-sm-4" id="block8" src={square8} />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6 px-sm-0">
                                        <img class="ml-sm-3" id="block9" src={square9} />
                                    </div>
                                    <div class="col-6 px-sm-0">
                                        <img class="ml-n5 ml-sm-2 ml-md-1" id="block10" src={square10} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
