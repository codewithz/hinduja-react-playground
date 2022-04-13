import React from "react";

export default class NameComponent extends React.Component {

    render() {
        const name = this.props.name ? this.props.name : 'Default Name';

        return (
            <div>
                <hr />
                <h5>Hello my name is {name}</h5>
            </div>
        )
    }
}