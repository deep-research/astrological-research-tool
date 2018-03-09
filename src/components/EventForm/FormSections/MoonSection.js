import React, {Component} from "react";

class MoonSection extends Component {
    render() {
        return (
            <div>
                <label htmlFor="eventFormMoon">The Moon (Position, Sector, Phase)</label>
                <select
                    value={this.props.state.lunarPosition}
                    onChange={this.props.eventFormInputChange.bind(this)}
                    name="lunarPosition"
                    className="form-control"
                    id="eventFormLunarPosition">
                    <option value="Above Horizon, Ascending">Above Horizon, Ascending</option>
                    <option value="Above Horizon, Descending">Above Horizon, Descending</option>
                    <option value="Below Horizon, Descending">Below Horizon, Descending</option>
                    <option value="Below Horizon, Ascending">Below Horizon, Ascending</option>
                    <option defaultValue=""></option>
                </select>
                <select
                    value={this.props.state.lunarSector}
                    onChange={this.props.eventFormInputChange.bind(this)}
                    name="lunarSector"
                    className="form-control"
                    id={"eventFormLunarSector"}>
                    <option value="Spring">Spring</option>
                    <option value="Summer">Summer</option>
                    <option value="Autumn">Autumn</option>
                    <option value="Winter">Winter</option>
                    <option defaultValue=""></option>
                </select>
                <select
                    value={this.props.state.lunarPhase}
                    onChange={this.props.eventFormInputChange.bind(this)}
                    name="lunarPhase"
                    className="form-control"
                    id="eventFormLunarPhase">
                    <option value="New Moon">New Moon</option>
                    <option value="Waxing Crescent">Waxing Crescent</option>
                    <option value="First Quarter">First Quarter</option>
                    <option value="Waxing Gibbous">Waxing Gibbous</option>
                    <option value="Full Moon">Full Moon</option>
                    <option value="Waning Gibbous">Waning Gibbous</option>
                    <option value="Third Quarter">Third Quarter</option>
                    <option value="Waning Crescent">Waning Crescent</option>
                    <option defaultValue=""></option>
                </select>
                <div className="formSpacer"></div>
            </div>
        )
    }
}

export default MoonSection;