import React, {Component} from "react";
import "./PlanetDisplay.css";

class PlanetDisplay extends Component {
    render() {
        return (
            <div>
                {(this.props.event[this.props.planet + "Position"])
                    ? <div><p><b>{this.props.adjective} Position:</b> {this.props.event[this.props.planet + "Position"]}</p></div>
                    : <div></div>}
                {(this.props.event[this.props.planet + "Sector"])
                    ? <div><p><b>{this.props.adjective} Sector:</b> {this.props.event[this.props.planet + "Sector"]}</p></div>
                    : <div></div>}
                {(this.props.event[this.props.planet + "Motion"])
                    ? <div><p><b>{this.props.adjective} Motion:</b> {this.props.event[this.props.planet + "Motion"]}</p></div>
                    : <div></div>}
            </div>
        )
    }
}

export default PlanetDisplay;