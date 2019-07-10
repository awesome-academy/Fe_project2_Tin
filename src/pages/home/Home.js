import React from "react";
import { connect } from "react-redux";
import { getProduct } from "../../redux/actions/index";

import Information from "./elements/Information";
import Jumpbotron from "./elements/Jumpbotron";
import BlockImage from "./elements/BlockImage";
import Perspect from "./elements/Perspect";
import Review from "./elements/Review";
import SPBC from "./elements/SPBC";

class Home extends React.Component {
    /* Navbar and Footer is outside Router, hence not here */
    componentDidMount() {
        this.props.getProduct();
    }

    SPBC() {
        return <SPBC listProduct={this.props.dataHotProduct} />;
    }

    render() {
        return (
            <div>
                <header>
                    <Jumpbotron />
                </header>
                <br />
                <main>
                    <Perspect />
                    <BlockImage />
                    <Review />
                    {this.SPBC()}
                    <Information />
                </main>
            </div>
        );
    }
}

const mapStatetoProps = state => {
    return { dataHotProduct: state.dataHotProduct };
};

export default connect(
    mapStatetoProps,
    { getProduct }
)(Home);
