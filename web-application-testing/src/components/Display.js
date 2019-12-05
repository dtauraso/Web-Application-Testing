import React from "react";

class Display extends React.Component {

    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div>
                
                <p>Balls: {this.props.player.balls}</p>
                <p>Strikes: {this.props.player.strikes}</p>

            </div>
        )
    }
}
export default Display;