import React, {Component} from "react";

class SunSection extends Component {
    render() {
        return (
            <div>
                <label htmlFor="eventFormSun">The Sun (Position, Season)</label>
                <select
                    value={this.props.state.sun}
                    onChange={this.props.eventFormInputChange.bind(this)}
                    name="sun"
                    className="form-control"
                    id="eventFormSun">
                    <option value="Above Horizon, Ascending">Above Horizon, Ascending</option>
                    <option value="Above Horizon, Descending">Above Horizon, Descending</option>
                    <option value="Below Horizon, Descending">Below Horizon, Descending</option>
                    <option value="Below Horizon, Ascending">Below Horizon, Ascending</option>
                    <option defaultValue=""></option>
                </select>
                <select
                    value={this.props.state.season}
                    onChange={this.props.eventFormInputChange.bind(this)}
                    name="season"
                    className="form-control"
                    id="eventFormSeason">
                    <option value="Spring">Spring</option>
                    <option value="Summer">Summer</option>
                    <option value="Autumn">Autumn</option>
                    <option value="Winter">Winter</option>
                    <option defaultValue=""></option>
                </select>
                <div className="formSpacer"></div>
            </div>
        )
    }
}

export default SunSection;