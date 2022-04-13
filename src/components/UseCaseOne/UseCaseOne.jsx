import React, { Component } from "react";
import HelloComponent from "./HelloComponent";
import NameComponent from "./NameComponent";

export default class UseCaseOneComponent extends Component {

    render() {
        return (
            <div>
                <h1>Use Case One </h1>
                <hr />
                <HelloComponent />
                <NameComponent name="Tom" />
                <NameComponent name="Alex" />
            </div>
        )
    }
}