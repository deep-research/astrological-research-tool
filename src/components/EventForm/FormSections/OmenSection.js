import React, {Component} from "react";

class OmenSection extends Component {
    render() {
        return (
            <div>
                <label htmlFor="eventFormWeather">Event Weather</label>
                <input
                    type="text"
                    maxLength="60"
                    value={this.props.state.weather}
                    onChange={this.props.eventFormInputChange}
                    name="weather"
                    className="form-control"
                    id="eventFormWeather"
                    placeholder="Description"
                />
                <div className="formSpacer"></div>

                <label htmlFor="eventFormNews">News of the Day</label>
                <input
                    type="text"
                    maxLength="60"
                    value={this.props.state.news}
                    onChange={this.props.eventFormInputChange}
                    name="news"
                    className="form-control"
                    id="eventFormNews"
                    placeholder="Top Stories"
                />
                <div className="formSpacer"></div>
            </div>
        )
    }
}

export default OmenSection;