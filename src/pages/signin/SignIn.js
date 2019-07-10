import React, { Component } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import FormSignIn from "./elements/FormSignIn";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export class SignIn extends Component {
    render() {
        return (
            <div className="sign-in">
                <NavBar />
                <Breadcrumb />
                <FormSignIn />
                <Footer />
            </div>
        );
    }
}

export default SignIn;
