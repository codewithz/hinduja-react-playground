import React, { Component } from "react";
import HelloComponent from "./HelloComponent";
import NameComponent from "./NameComponent";
import { NameFCompoment } from "./NameFComponent";
import { CompanyComponent } from './CompanyComponent';
import { TickerComponent } from './TickerComponent';
import { CounterComponent } from "./CounterComponent";

export default class UseCaseOneComponent extends Component {

    render() {
        return (
            <div>
                <h1>Use Case One </h1>
                <hr />
                <CounterComponent />
                <hr />
                <TickerComponent />
                <hr />
                <CompanyComponent />
                <hr />
                <HelloComponent />
                <NameComponent name="Tom" />
                <NameComponent name="Alex" />
                <hr />
                <NameFCompoment name="Arun" />
                <hr />
            </div>
        )
    }
}