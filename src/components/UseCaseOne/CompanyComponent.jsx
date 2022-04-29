import React, { Component } from "react"

export class CompanyComponent extends Component {

    state = {
        company: 'Hinduja',
        country: 'India'
    }

    changeCompany = () => {

        this.setState({ company: 'Hinduja College' })

    }

    render() {
        return (
            <div>
                <h4>Company Component- State from Class Component</h4>

                College Name: {this.state.company}
                <br />
                Country :{this.state.country}
                <br />
                <button onClick={this.changeCompany}>Change Name</button>

            </div>
        )
    }
}