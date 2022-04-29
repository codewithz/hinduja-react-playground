import React, { Component } from "react";

export class TickerComponent extends Component {

    state = {
        tickerCount: 0
    }

    componentDidMount() {
        console.log("Component Did Mount.")
        this.timer = setInterval(this.tick, 1000)
    }

    tick = () => {
        this.setState({
            tickerCount: this.state.tickerCount + 1
        })
    }


    render() {
        return (
            <div>
                <h4>Ticker Component</h4>

                Time Elapsed: 
                {this.state.tickerCount}
            </div>
        )
    }
}