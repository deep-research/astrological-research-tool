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
                        <label htmlFor="eventFormName">Event Name <span className="star">*</span></label>
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
                        <label htmlFor="eventFormCity">Event City <span className="star">*</span></label>
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
                        <label htmlFor="eventFormDate">Event Date <span className="star">*</span></label>
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
                        <label htmlFor="eventFormTime">Local Time <span className="star">*</span></label>
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
                        <label htmlFor="eventFormSun">Solar Quadrant <span className="star">*</span></label>
                        <select
                            value={this.props.state.sun}
                            onChange={this.props.eventFormInputChange.bind(this)}
                            name="sun"
                            className="form-control"
                            id="eventFormSun">
                            <option selected value="Above Horizon, Ascending">Above Horizon, Ascending</option>
                            <option value="Above Horizon, Descending">Above Horizon, Descending</option>
                            <option value="Below Horizon, Descending">Below Horizon, Descending</option>
                            <option value="Below Horizon, Ascending">Below Horizon, Ascending</option>
                            <option value="">No Answer</option>
                        </select>
                        <div className="formSpacer"></div>
                        <label htmlFor="eventFormSeason">Solar Season <span className="star">*</span></label>
                        <select
                            value={this.props.state.season}
                            onChange={this.props.eventFormInputChange.bind(this)}
                            name="season"
                            className="form-control"
                            id="eventFormSeason">
                            <option selected value="Spring">Spring</option>
                            <option value="Summer">Summer</option>
                            <option value="Autumn">Autumn</option>
                            <option value="Winter">Winter</option>
                            <option value="">No Answer</option>
                        </select>
                        <div className="formSpacer"></div>
                        <label htmlFor="eventFormMoon">Lunar Quadrant <span className="star">*</span></label>
                        <select
                            value={this.props.state.moon}
                            onChange={this.props.eventFormInputChange.bind(this)}
                            name="moon"
                            className="form-control"
                            id="eventFormMoon">
                            <option selected value="Above Horizon, Ascending">Above Horizon, Ascending</option>
                            <option value="Above Horizon, Descending">Above Horizon, Descending</option>
                            <option value="Below Horizon, Descending">Below Horizon, Descending</option>
                            <option value="Below Horizon, Ascending">Below Horizon, Ascending</option>
                            <option value="">No Answer</option>
                        </select>
                        <div className="formSpacer"></div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <label htmlFor="eventFormSeason">Lunar Phase <span className="star">*</span></label>
                        <select
                            value={this.props.state.phase}
                            onChange={this.props.eventFormInputChange.bind(this)}
                            name="phase"
                            className="form-control"
                            id="eventFormPhase">
                            <option selected value="New Moon">New Moon</option>
                            <option value="Waxing Crescent">Waxing Crescent</option>
                            <option value="First Quarter">First Quarter</option>
                            <option value="Waxing Gibbous">Waxing Gibbous</option>
                            <option value="Full Moon">Full Moon</option>
                            <option value="Waning Gibbous">Waning Gibbous</option>
                            <option value="Third Quarter">Third Quarter</option>
                            <option value="Waning Crescent">Waning Crescent</option>
                            <option value="">No Answer</option>
                        </select>
                        <div className="formSpacer"></div>
                        <label htmlFor="eventFormMercury">Mercurial Quadrant <span className="star">*</span></label>
                        <select
                            value={this.props.state.mercury}
                            onChange={this.props.eventFormInputChange.bind(this)}
                            name="mercury"
                            className="form-control"
                            id="eventFormMercury">
                            <option selected value="Above Horizon, Ascending">Above Horizon, Ascending</option>
                            <option value="Above Horizon, Descending">Above Horizon, Descending</option>
                            <option value="Below Horizon, Descending">Below Horizon, Descending</option>
                            <option value="Below Horizon, Ascending">Below Horizon, Ascending</option>
                            <option value="">No Answer</option>
                        </select>
                        <div className="formSpacer"></div>                        
                        <label htmlFor="eventFormVenus">Venusian Quadrant <span className="star">*</span></label>
                        <select
                            value={this.props.state.venus}
                            onChange={this.props.eventFormInputChange.bind(this)}
                            name="venus"
                            className="form-control"
                            id="eventFormVenus">
                            <option selected value="Above Horizon, Ascending">Above Horizon, Ascending</option>
                            <option value="Above Horizon, Descending">Above Horizon, Descending</option>
                            <option value="Below Horizon, Descending">Below Horizon, Descending</option>
                            <option value="Below Horizon, Ascending">Below Horizon, Ascending</option>
                            <option value="">No Answer</option>
                        </select>
                        <div className="formSpacer"></div>                        
                        <label htmlFor="eventFormMars">Martian Quadrant <span className="star">*</span></label>
                        <select
                            value={this.props.state.mars}
                            onChange={this.props.eventFormInputChange.bind(this)}
                            name="mars"
                            className="form-control"
                            id="eventFormMars">
                            <option selected value="Above Horizon, Ascending">Above Horizon, Ascending</option>
                            <option value="Above Horizon, Descending">Above Horizon, Descending</option>
                            <option value="Below Horizon, Descending">Below Horizon, Descending</option>
                            <option value="Below Horizon, Ascending">Below Horizon, Ascending</option>
                            <option value="">No Answer</option>
                        </select>
                        <div className="formSpacer"></div>                        
                        <label htmlFor="eventFormJupiter">Jovian Quadrant <span className="star">*</span></label>
                        <select
                            value={this.props.state.jupiter}
                            onChange={this.props.eventFormInputChange.bind(this)}
                            name="jupiter"
                            className="form-control"
                            id="eventFormJupiter">
                            <option selected value="Above Horizon, Ascending">Above Horizon, Ascending</option>
                            <option value="Above Horizon, Descending">Above Horizon, Descending</option>
                            <option value="Below Horizon, Descending">Below Horizon, Descending</option>
                            <option value="Below Horizon, Ascending">Below Horizon, Ascending</option>
                            <option value="">No Answer</option>
                        </select>
                        <div className="formSpacer"></div>                        
                        <label htmlFor="eventFormSaturn">Saturnian Quadrant <span className="star">*</span></label>
                        <select
                            value={this.props.state.saturn}
                            onChange={this.props.eventFormInputChange.bind(this)}
                            name="saturn"
                            className="form-control"
                            id="eventFormSaturn">
                            <option selected value="Above Horizon, Ascending">Above Horizon, Ascending</option>
                            <option value="Above Horizon, Descending">Above Horizon, Descending</option>
                            <option value="Below Horizon, Descending">Below Horizon, Descending</option>
                            <option value="Below Horizon, Ascending">Below Horizon, Ascending</option>
                            <option value="">No Answer</option>
                        </select>
                        <div className="formSpacer"></div>                        
                        <label htmlFor="eventFormUranus">Uranian Quadrant <span className="star">*</span></label>
                        <select
                            value={this.props.state.uranus}
                            onChange={this.props.eventFormInputChange.bind(this)}
                            name="uranus"
                            className="form-control"
                            id="eventFormUranus">
                            <option selected value="Above Horizon, Ascending">Above Horizon, Ascending</option>
                            <option value="Above Horizon, Descending">Above Horizon, Descending</option>
                            <option value="Below Horizon, Descending">Below Horizon, Descending</option>
                            <option value="Below Horizon, Ascending">Below Horizon, Ascending</option>
                            <option value="">No Answer</option>
                        </select>
                        <div className="formSpacer"></div>                        
                        <label htmlFor="eventFormNeptune">Neptunian Quadrant <span className="star">*</span></label>
                        <select
                            value={this.props.state.neptune}
                            onChange={this.props.eventFormInputChange.bind(this)}
                            name="neptune"
                            className="form-control"
                            id="eventFormNeptune">
                            <option selected value="Above Horizon, Ascending">Above Horizon, Ascending</option>
                            <option value="Above Horizon, Descending">Above Horizon, Descending</option>
                            <option value="Below Horizon, Descending">Below Horizon, Descending</option>
                            <option value="Below Horizon, Ascending">Below Horizon, Ascending</option>
                            <option value="">No Answer</option>
                        </select>
                        <div className="formSpacer"></div>                        
                        <label htmlFor="eventFormPluto">Plutonian Quadrant <span className="star">*</span></label>
                        <select
                            value={this.props.state.pluto}
                            onChange={this.props.eventFormInputChange.bind(this)}
                            name="pluto"
                            className="form-control"
                            id="eventFormPluto">
                            <option selected value="Above Horizon, Ascending">Above Horizon, Ascending</option>
                            <option value="Above Horizon, Descending">Above Horizon, Descending</option>
                            <option value="Below Horizon, Descending">Below Horizon, Descending</option>
                            <option value="Below Horizon, Ascending">Below Horizon, Ascending</option>
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