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

                        <label htmlFor="eventFormSun">The Sun (Position, Season) <span className="star">*</span></label>
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

                        <label htmlFor="eventFormMoon">The Moon (Position, Phase) <span className="star">*</span></label>
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

                        <label htmlFor="eventFormMercury">Mercury (Position, Sector, Motion) <span className="star">*</span></label>
                        <select
                            value={this.props.state.mercuryPosition}
                            onChange={this.props.eventFormInputChange.bind(this)}
                            name="mercuryPosition"
                            className="form-control"
                            id="eventFormMercuryPosition">
                            <option selected value="Above Horizon, Ascending">Above Horizon, Ascending</option>
                            <option value="Above Horizon, Descending">Above Horizon, Descending</option>
                            <option value="Below Horizon, Descending">Below Horizon, Descending</option>
                            <option value="Below Horizon, Ascending">Below Horizon, Ascending</option>
                            <option value="">No Answer</option>
                        </select>
                        <select
                            value={this.props.state.mercurySector}
                            onChange={this.props.eventFormInputChange.bind(this)}
                            name="mercurySector"
                            className="form-control"
                            id="eventFormMercurySector">
                            <option selected value="Spring">Spring</option>
                            <option value="Summer">Summer</option>
                            <option value="Autumn">Autumn</option>
                            <option value="Winter">Winter</option>
                            <option value="">No Answer</option>
                        </select>
                        <select
                            value={this.props.state.mercuryMotion}
                            onChange={this.props.eventFormInputChange.bind(this)}
                            name="mercuryMotion"
                            className="form-control"
                            id="eventFormMercuryMotion">
                            <option selected value="Direct">Direct</option>
                            <option value="Retrograde">Retrograde</option>
                            <option value="">No Answer</option>
                        </select>
                        <div className="formSpacer"></div>

                        <label htmlFor="eventFormVenus">Venus (Position, Sector, Motion) <span className="star">*</span></label>
                        <select
                            value={this.props.state.venusPosition}
                            onChange={this.props.eventFormInputChange.bind(this)}
                            name="venusPosition"
                            className="form-control"
                            id="eventFormVenusPosition">
                            <option selected value="Above Horizon, Ascending">Above Horizon, Ascending</option>
                            <option value="Above Horizon, Descending">Above Horizon, Descending</option>
                            <option value="Below Horizon, Descending">Below Horizon, Descending</option>
                            <option value="Below Horizon, Ascending">Below Horizon, Ascending</option>
                            <option value="">No Answer</option>
                        </select>
                        <select
                            value={this.props.state.venusSector}
                            onChange={this.props.eventFormInputChange.bind(this)}
                            name="venusSector"
                            className="form-control"
                            id="eventFormVenusSector">
                            <option selected value="Spring">Spring</option>
                            <option value="Summer">Summer</option>
                            <option value="Autumn">Autumn</option>
                            <option value="Winter">Winter</option>
                            <option value="">No Answer</option>
                        </select>
                        <select
                            value={this.props.state.venusMotion}
                            onChange={this.props.eventFormInputChange.bind(this)}
                            name="venusMotion"
                            className="form-control"
                            id="eventFormVenusMotion">
                            <option selected value="Direct">Direct</option>
                            <option value="Retrograde">Retrograde</option>
                            <option value="">No Answer</option>
                        </select>
                        <div className="formSpacer"></div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                    <label htmlFor="eventFormMars">Mars (Position, Sector, Motion) <span className="star">*</span></label>
                        <select
                            value={this.props.state.marsPosition}
                            onChange={this.props.eventFormInputChange.bind(this)}
                            name="marsPosition"
                            className="form-control"
                            id="eventFormMearsPosition">
                            <option selected value="Above Horizon, Ascending">Above Horizon, Ascending</option>
                            <option value="Above Horizon, Descending">Above Horizon, Descending</option>
                            <option value="Below Horizon, Descending">Below Horizon, Descending</option>
                            <option value="Below Horizon, Ascending">Below Horizon, Ascending</option>
                            <option value="">No Answer</option>
                        </select>
                        <select
                            value={this.props.state.marsSector}
                            onChange={this.props.eventFormInputChange.bind(this)}
                            name="marsSector"
                            className="form-control"
                            id="eventFormMarsSector">
                            <option selected value="Spring">Spring</option>
                            <option value="Summer">Summer</option>
                            <option value="Autumn">Autumn</option>
                            <option value="Winter">Winter</option>
                            <option value="">No Answer</option>
                        </select>
                        <select
                            value={this.props.state.marsMotion}
                            onChange={this.props.eventFormInputChange.bind(this)}
                            name="marsMotion"
                            className="form-control"
                            id="eventFormMarsMotion">
                            <option selected value="Direct">Direct</option>
                            <option value="Retrograde">Retrograde</option>
                            <option value="">No Answer</option>
                        </select>
                        <div className="formSpacer"></div>

                        <label htmlFor="eventFormJupiter">Jupiter (Position, Sector, Motion) <span className="star">*</span></label>
                        <select
                            value={this.props.state.jupiterPosition}
                            onChange={this.props.eventFormInputChange.bind(this)}
                            name="jupiterPosition"
                            className="form-control"
                            id="eventFormJupiterPosition">
                            <option selected value="Above Horizon, Ascending">Above Horizon, Ascending</option>
                            <option value="Above Horizon, Descending">Above Horizon, Descending</option>
                            <option value="Below Horizon, Descending">Below Horizon, Descending</option>
                            <option value="Below Horizon, Ascending">Below Horizon, Ascending</option>
                            <option value="">No Answer</option>
                        </select>
                        <select
                            value={this.props.state.jupiterSector}
                            onChange={this.props.eventFormInputChange.bind(this)}
                            name="jupiterSector"
                            className="form-control"
                            id="eventFormJupiterSector">
                            <option selected value="Spring">Spring</option>
                            <option value="Summer">Summer</option>
                            <option value="Autumn">Autumn</option>
                            <option value="Winter">Winter</option>
                            <option value="">No Answer</option>
                        </select>
                        <select
                            value={this.props.state.jupiterMotion}
                            onChange={this.props.eventFormInputChange.bind(this)}
                            name="jupiterMotion"
                            className="form-control"
                            id="eventFormJupiterMotion">
                            <option selected value="Direct">Direct</option>
                            <option value="Retrograde">Retrograde</option>
                            <option value="">No Answer</option>
                        </select>
                        <div className="formSpacer"></div>

                        <label htmlFor="eventFormSaturn">Saturn (Position, Sector, Motion) <span className="star">*</span></label>
                        <select
                            value={this.props.state.saturnPosition}
                            onChange={this.props.eventFormInputChange.bind(this)}
                            name="saturnPosition"
                            className="form-control"
                            id="eventFormSaturnPosition">
                            <option selected value="Above Horizon, Ascending">Above Horizon, Ascending</option>
                            <option value="Above Horizon, Descending">Above Horizon, Descending</option>
                            <option value="Below Horizon, Descending">Below Horizon, Descending</option>
                            <option value="Below Horizon, Ascending">Below Horizon, Ascending</option>
                            <option value="">No Answer</option>
                        </select>
                        <select
                            value={this.props.state.saturnSector}
                            onChange={this.props.eventFormInputChange.bind(this)}
                            name="saturnSector"
                            className="form-control"
                            id="eventFormSaturnSector">
                            <option selected value="Spring">Spring</option>
                            <option value="Summer">Summer</option>
                            <option value="Autumn">Autumn</option>
                            <option value="Winter">Winter</option>
                            <option value="">No Answer</option>
                        </select>
                        <select
                            value={this.props.state.saturnMotion}
                            onChange={this.props.eventFormInputChange.bind(this)}
                            name="saturnMotion"
                            className="form-control"
                            id="eventFormSaturnMotion">
                            <option selected value="Direct">Direct</option>
                            <option value="Retrograde">Retrograde</option>
                            <option value="">No Answer</option>
                        </select>
                        <div className="formSpacer"></div>

                        <label htmlFor="eventFormUranus">Uranus (Position, Sector, Motion) <span className="star">*</span></label>
                        <select
                            value={this.props.state.uranusPosition}
                            onChange={this.props.eventFormInputChange.bind(this)}
                            name="uranusPosition"
                            className="form-control"
                            id="eventFormUranusPosition">
                            <option selected value="Above Horizon, Ascending">Above Horizon, Ascending</option>
                            <option value="Above Horizon, Descending">Above Horizon, Descending</option>
                            <option value="Below Horizon, Descending">Below Horizon, Descending</option>
                            <option value="Below Horizon, Ascending">Below Horizon, Ascending</option>
                            <option value="">No Answer</option>
                        </select>
                        <select
                            value={this.props.state.uranusSector}
                            onChange={this.props.eventFormInputChange.bind(this)}
                            name="uranusSector"
                            className="form-control"
                            id="eventFormUranusSector">
                            <option selected value="Spring">Spring</option>
                            <option value="Summer">Summer</option>
                            <option value="Autumn">Autumn</option>
                            <option value="Winter">Winter</option>
                            <option value="">No Answer</option>
                        </select>
                        <select
                            value={this.props.state.uranusMotion}
                            onChange={this.props.eventFormInputChange.bind(this)}
                            name="uranusMotion"
                            className="form-control"
                            id="eventFormUranusMotion">
                            <option selected value="Direct">Direct</option>
                            <option value="Retrograde">Retrograde</option>
                            <option value="">No Answer</option>
                        </select>
                        <div className="formSpacer"></div>

                        <label htmlFor="eventFormNeptune">Neptune (Position, Sector, Motion) <span className="star">*</span></label>
                        <select
                            value={this.props.state.neptunePosition}
                            onChange={this.props.eventFormInputChange.bind(this)}
                            name="neptunePosition"
                            className="form-control"
                            id="eventFormNeptunePosition">
                            <option selected value="Above Horizon, Ascending">Above Horizon, Ascending</option>
                            <option value="Above Horizon, Descending">Above Horizon, Descending</option>
                            <option value="Below Horizon, Descending">Below Horizon, Descending</option>
                            <option value="Below Horizon, Ascending">Below Horizon, Ascending</option>
                            <option value="">No Answer</option>
                        </select>
                        <select
                            value={this.props.state.neptuneSector}
                            onChange={this.props.eventFormInputChange.bind(this)}
                            name="neptuneSector"
                            className="form-control"
                            id="eventFormNeptuneSector">
                            <option selected value="Spring">Spring</option>
                            <option value="Summer">Summer</option>
                            <option value="Autumn">Autumn</option>
                            <option value="Winter">Winter</option>
                            <option value="">No Answer</option>
                        </select>
                        <select
                            value={this.props.state.neptuneMotion}
                            onChange={this.props.eventFormInputChange.bind(this)}
                            name="neptuneMotion"
                            className="form-control"
                            id="eventFormNeptuneMotion">
                            <option selected value="Direct">Direct</option>
                            <option value="Retrograde">Retrograde</option>
                            <option value="">No Answer</option>
                        </select>
                        <div className="formSpacer"></div>

                        <label htmlFor="eventFormPluto">Pluto (Position, Sector, Motion) <span className="star">*</span></label>
                        <select
                            value={this.props.state.plutoPosition}
                            onChange={this.props.eventFormInputChange.bind(this)}
                            name="plutoPosition"
                            className="form-control"
                            id="eventFormPlutoPosition">
                            <option selected value="Above Horizon, Ascending">Above Horizon, Ascending</option>
                            <option value="Above Horizon, Descending">Above Horizon, Descending</option>
                            <option value="Below Horizon, Descending">Below Horizon, Descending</option>
                            <option value="Below Horizon, Ascending">Below Horizon, Ascending</option>
                            <option value="">No Answer</option>
                        </select>
                        <select
                            value={this.props.state.plutoSector}
                            onChange={this.props.eventFormInputChange.bind(this)}
                            name="plutoSector"
                            className="form-control"
                            id="eventFormPlutoSector">
                            <option selected value="Spring">Spring</option>
                            <option value="Summer">Summer</option>
                            <option value="Autumn">Autumn</option>
                            <option value="Winter">Winter</option>
                            <option value="">No Answer</option>
                        </select>
                        <select
                            value={this.props.state.plutoMotion}
                            onChange={this.props.eventFormInputChange.bind(this)}
                            name="plutoMotion"
                            className="form-control"
                            id="eventFormPlutoMotion">
                            <option selected value="Direct">Direct</option>
                            <option value="Retrograde">Retrograde</option>
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