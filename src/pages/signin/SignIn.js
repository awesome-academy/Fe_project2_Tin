import React, { Component } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import FormSignIn from "./elements/FormSignIn";

export class SignIn extends Component {
    render() {
        return (
            <div className="sign-in">
                <Breadcrumb />
                <FormSignIn />
            </div>
        );
    }
}

export default SignIn;
