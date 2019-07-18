import React, { Component } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import FormSignUp from "./elements/FormSignUp";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export class SignIn extends Component {
    render() {
        return (
            <div className="sign-in">
                <NavBar />
                <Breadcrumb path1="đăng ký" />
                <FormSignUp />
                <Footer />
            </div>
        );
    }
}

export default SignIn;
