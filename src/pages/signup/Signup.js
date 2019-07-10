import React, { Component } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import FormSignUp from "./elements/FormSignUp";

export class SignIn extends Component {
    render() {
        return (
            <div className="sign-in">
                <Breadcrumb path1="đăng ký" />
                <FormSignUp />
            </div>
        );
    }
}

export default SignIn;
