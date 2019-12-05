import React from "react";

class Dashboard extends React.Component {

    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div>
                <button data-testid="strike-button" onClick={() => {this.props.countRules(1, 0, 0, 0)}}>
                    strike
                </button>
                <button data-testid="ball-button" onClick={() => {this.props.countRules(0, 1, 0, 0)}}>
                    ball
                </button>
                <button data-testid="foul-button" onClick={() => {this.props.countRules(0, 0, 1, 0)}}>
                    foul
                </button>
                <button data-testid="hit-button" onClick={() => {this.props.countRules(0, 0, 0, 1)}}>
                    hit
                </button>
            </div>
        )
    }
}
export default Dashboard;