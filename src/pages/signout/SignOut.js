import React, { Component } from "react";
import { Redirect, Route, Link } from "react-router-dom";

export default class SignOut extends Component {
    render() {
        return (
            <div>
                <Redirect to="/" />
            </div>
        );
    }
}
