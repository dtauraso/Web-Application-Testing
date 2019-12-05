import React from "react";

class Dashboard extends React.Component {

    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div>
                <button onClick={() => {this.props.countRules(1, 0, 0, 0)}}>
                    strike
                </button>
                <button onClick={() => {this.props.countRules(0, 1, 0, 0)}}>
                    ball
                </button>
                <button onClick={() => {this.props.countRules(0, 0, 1, 0)}}>
                    foul
                </button>
                <button onClick={() => {this.props.countRules(0, 0, 0, 1)}}>
                    hit
                </button>
            </div>
        )
    }
}
export default Dashboard;