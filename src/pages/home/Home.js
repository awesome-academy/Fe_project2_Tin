import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import Jumpbotron from "./elements/Jumpbotron";
import Perspect from "./elements/Perspect";
import BlockImage from "./elements/BlockImage";
import Review from "./elements/Review";
import SPBC from "./elements/SPBC";
import Information from "./elements/Information";
import Footer from "../../components/Footer";

export default class Home extends Component {
    render() {
        return (
            <body>
                <header>
                    <NavBar />
                    <Jumpbotron />
                </header>
                <br />
                <main>
                    <Perspect />
                    <BlockImage />
                    <Review />
                    <SPBC />
                    <Information />
                </main>
                <Footer />
            </body>
        );
    }
}
