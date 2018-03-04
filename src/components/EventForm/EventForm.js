import React, {Component} from "react";
import "./EventForm.css";
import PlanetForm from "../PlanetForm";

class EventForm extends Component {
    render() {
        return (
            <div id="EventForm">
                <br />
                <h3>Add an Event</h3>
                <form onSubmit={this.props.handleEventFormSubmit}>
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <label htmlFor="eventFormName">Event Name <span className="star">*</span></label>
                            <input required
                                type="text"
                                maxLength="40"
                                value={this.props.state.name}
                                onChange={this.props.eventFormInputChange}
                                name="name"
                                className="form-control"
                                id="eventFormName"
                                placeholder="Name"
                            />
                            <div className="formSpacer"></div>
                            
                            <label htmlFor="eventFormCity">Event City <span className="star">*</span></label>
                            <input required
                                type="text"
                                maxLength="40"
                                value={this.props.state.cityInput}
                                onChange={this.props.eventFormInputChange}
                                name="cityInput"
                                className={"form-control " + this.props.cityValidation()}
                                id="eventFormCity"
                                placeholder="City"
                            />
                            <div className="formSpacer"></div>

                            <label htmlFor="eventFormDate">Local Time and Date <span className="star">*</span></label>
                            <input required
                                type="time"
                                value={this.props.state.time}
                                onChange={this.props.eventFormInputChange}
                                name="time"
                                className="form-control"
                                id="eventFormTime"
                                placeholder="Time"
                            />                     
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
                            
                            <PlanetForm
                                state={this.props.state}
                                eventFormInputChange={this.props.eventFormInputChange}
                                handleEventFormSubmit={this.props.handleEventFormSubmit}
                                cityValidation= {this.props.cityValidation}
                                planetLower="mercury"
                                planetCaps="Mercury"
                            />

                            <PlanetForm
                                state={this.props.state}
                                eventFormInputChange={this.props.eventFormInputChange}
                                handleEventFormSubmit={this.props.handleEventFormSubmit}
                                cityValidation= {this.props.cityValidation}
                                planetLower="venus"
                                planetCaps="Venus"
                            />
                        </div>

                        <div className="col-sm-12 col-md-6">
                            <PlanetForm
                                state={this.props.state}
                                eventFormInputChange={this.props.eventFormInputChange}
                                handleEventFormSubmit={this.props.handleEventFormSubmit}
                                cityValidation= {this.props.cityValidation}
                                planetLower="mars"
                                planetCaps="Mars"
                            />

                            <PlanetForm
                                state={this.props.state}
                                eventFormInputChange={this.props.eventFormInputChange}
                                handleEventFormSubmit={this.props.handleEventFormSubmit}
                                cityValidation= {this.props.cityValidation}
                                planetLower="jupiter"
                                planetCaps="Jupiter"
                            />

                            <PlanetForm
                                state={this.props.state}
                                eventFormInputChange={this.props.eventFormInputChange}
                                handleEventFormSubmit={this.props.handleEventFormSubmit}
                                cityValidation= {this.props.cityValidation}
                                planetLower="saturn"
                                planetCaps="Saturn"
                            />

                            <PlanetForm
                                state={this.props.state}
                                eventFormInputChange={this.props.eventFormInputChange}
                                handleEventFormSubmit={this.props.handleEventFormSubmit}
                                cityValidation= {this.props.cityValidation}
                                planetLower="uranus"
                                planetCaps="Uranus"
                            />

                            <PlanetForm
                                state={this.props.state}
                                eventFormInputChange={this.props.eventFormInputChange}
                                handleEventFormSubmit={this.props.handleEventFormSubmit}
                                cityValidation= {this.props.cityValidation}
                                planetLower="neptune"
                                planetCaps="Neptune"
                            />

                            <PlanetForm
                                state={this.props.state}
                                eventFormInputChange={this.props.eventFormInputChange}
                                handleEventFormSubmit={this.props.handleEventFormSubmit}
                                cityValidation= {this.props.cityValidation}
                                planetLower="pluto"
                                planetCaps="Pluto"
                            />
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