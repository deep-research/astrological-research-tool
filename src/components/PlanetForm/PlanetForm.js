import React, {Component} from "react";
import "./PlanetForm.css";

class PlanetForm extends Component {
    render() {
        return (
            <div>
                <label htmlFor={"eventForm" + this.props.planetCaps}>{this.props.planetCaps} (Position, Sector, Motion) <span className="star">*</span></label>
                <select
                    value={this.props.state[this.props.planetLower + "Position"]}
                    onChange={this.props.eventFormInputChange.bind(this)}
                    name={this.props.planetLower + "Position"}
                    className="form-control"
                    id={"eventForm" + this.props.planetCaps + "Position"}>
                    <option selected value="Above Horizon, Ascending">Above Horizon, Ascending</option>
                    <option value="Above Horizon, Descending">Above Horizon, Descending</option>
                    <option value="Below Horizon, Descending">Below Horizon, Descending</option>
                    <option value="Below Horizon, Ascending">Below Horizon, Ascending</option>
                    <option value="">No Answer</option>
                </select>
                <select
                    value={this.props.state[this.props.planetLower + "Sector"]}
                    onChange={this.props.eventFormInputChange.bind(this)}
                    name={this.props.planetLower + "Sector"}
                    className="form-control"
                    id={"eventForm" + this.props.planetCaps + "Sector"}>
                    <option selected value="Spring">Spring</option>
                    <option value="Summer">Summer</option>
                    <option value="Autumn">Autumn</option>
                    <option value="Winter">Winter</option>
                    <option value="">No Answer</option>
                </select>
                <select
                    value={this.props.state[this.props.planetLower + "Motion"]}
                    onChange={this.props.eventFormInputChange.bind(this)}
                    name={this.props.planetLower + "Motion"}
                    className="form-control"
                    id={"eventForm" + this.props.planetCaps + "Motion"}>
                    <option selected value="Direct">Direct</option>
                    <option value="Retrograde">Retrograde</option>
                    <option value="">No Answer</option>
                </select>
                <div className="formSpacer"></div>
            </div>
        )
    }
}

export default PlanetForm;