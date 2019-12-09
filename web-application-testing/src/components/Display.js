import React from "react";

class Display extends React.Component {

    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div>
                
                <p data-testid="balls">Balls: {this.props.player.balls}</p>
                <p data-testid="strikes">Strikes: {this.props.player.strikes}</p>

            </div>
        )
    }
}
export default Display;