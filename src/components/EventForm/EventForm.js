import React, {Component} from "react";
import "./EventForm.css";

class EventForm extends Component {
    render() {
        return (
        <div id="EventForm">
            <br />
            <h3>Add an Event</h3>
            <form onSubmit={this.props.handleEventFormSubmit}>
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <label htmlFor="eventFormName">Event Name</label>
                        <input required
                            type="text"
                            value={this.props.state.name}
                            onChange={this.props.eventFormInputChange}
                            name="name"
                            className="form-control"
                            id="eventFormName"
                            placeholder="Name"
                        />
                        <div className="formSpacer"></div>
                        <label htmlFor="eventFormCity">Event City</label>
                        <input required
                            type="text"
                            value={this.props.state.cityInput}
                            onChange={this.props.eventFormInputChange}
                            name="cityInput"
                            className={"form-control " + this.props.cityValidation()}
                            id="eventFormCity"
                            placeholder="City"
                        />
                        <div className="formSpacer"></div>
                        <label htmlFor="eventFormDate">Event Date</label>
                        <input required
                            type="date"
                            min="0001-01-01"
                            max="3999-12-31"
                            value={this.props.state.date}
                            onChange={this.props.eventFormInputChange}
                            name="date"
                            className="form-control"
                            id="eventFormDate"
                            placeholder="Date"
                        />
                        <div className="formSpacer"></div>
                        <label htmlFor="eventFormTime">Local Time</label>
                        <input required
                            type="time"
                            value={this.props.state.time}
                            onChange={this.props.eventFormInputChange}
                            name="time"
                            className="form-control"
                            id="eventFormTime"
                            placeholder="Time"
                        />
                        <div className="formSpacer"></div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <label htmlFor="eventFormWeather">Event Weather</label>
                        <input
                            type="text"
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
                            value={this.props.state.news}
                            onChange={this.props.eventFormInputChange}
                            name="news"
                            className="form-control"
                            id="eventFormNews"
                            placeholder="Top Story"
                        />
                        <div className="formSpacer"></div>
                        <label htmlFor="eventFormSun">Solar Quadrant</label>
                        <select
                            value={this.props.state.sun}
                            onChange={this.props.eventFormInputChange.bind(this)}
                            name="sun"
                            className="form-control"
                            id="eventFormSun">
                            <option selected value="Above Horizon, Ascending">1. Above Horizon, Ascending</option>
                            <option value="Above Horizon, Descending">2. Above Horizon, Descending</option>
                            <option value="Below Horizon, Descending">3. Below Horizon, Descending</option>
                            <option value="Below Horizon, Ascending">4. Below Horizon, Ascending</option>
                            <option value="">No Answer</option>
                        </select>
                        <div className="formSpacer"></div>
                    </div>
                </div>
                <div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        id="eventFormBtn"
                    >Submit</button>
                </div>
            </form>
        </div>
        );
    }
}

export default EventForm;