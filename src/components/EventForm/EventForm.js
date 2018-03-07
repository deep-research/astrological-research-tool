import React, {Component} from "react";
import "./EventForm.css";
import PlanetForm from "../PlanetForm";
import timezoner from "timezoner";
import moment from "moment-timezone";

class EventForm extends Component {
    handleEventFormSubmit = event => {
        event.preventDefault()

        // Save `this` for later use
        const file = this.props;

        // If the city name was approved
        if (file.state.cityResult) {
            file.toastFunction("info", "Event Submitted Successfully!")

            const year = file.state.date.slice(0,4);
            const month = file.state.date.slice(5,7);
            const day = file.state.date.slice(8,10);
            const hours = file.state.time.slice(0,2);
            const minutes = file.state.time.slice(3,5);
            const lat = file.state.cityLat;
            const lng = file.state.cityLng;

            // Determine the timezone from the coordinates
            timezoner.getTimeZone(
                lat,
                lng,
                (err, data) => {
                    if (err) {
                        console.log(err);
                    } else {                   
                        const timeZoneName = data.timeZoneName;
                        const timeZoneId = data.timeZoneId;

                        // Convert local time to unversal time
                        const localMoment = moment.tz(`${year}-${month}-${day} ${hours}:${minutes}`,
                            timeZoneId)
                        const localTime = moment(localMoment).format("h:mm a, MMM Do YYYY");
                        const utcTime = moment.utc(localMoment).format("h:mm a, MMM Do YYYY");

                        // see offsetConverter.js...

                        const newEvent = {
                            name: file.state.name.trim(),
                            city: file.state.cityResult, lat: lat, lng: lng,
                            key: file.state.events.length + 1,
                            localTime: localTime, utcTime: utcTime, timeZoneName: timeZoneName,
                            weather: file.state.weather.trim(), news: file.state.news.trim(),
                            sun: file.state.sun.trim(), season: file.state.season.trim(),
                            lunarPosition: file.state.lunarPosition.trim(), lunarSector: file.state.lunarSector.trim(), lunarPhase: file.state.lunarPhase.trim(),
                            mercuryPosition: file.state.mercuryPosition.trim(), mercurySector: file.state.mercurySector.trim(), mercuryMotion: file.state.mercuryMotion.trim(),
                            venusPosition: file.state.venusPosition.trim(), venusSector: file.state.venusSector.trim(), venusMotion: file.state.venusMotion.trim(),
                            marsPosition: file.state.marsPosition.trim(), marsSector: file.state.marsSector.trim(), marsMotion: file.state.marsMotion.trim(),
                            jupiterPosition: file.state.jupiterPosition.trim(), jupiterSector: file.state.jupiterSector.trim(), jupiterMotion: file.state.jupiterMotion.trim(),
                            saturnPosition: file.state.saturnPosition.trim(), saturnSector: file.state.saturnSector.trim(), saturnMotion: file.state.saturnMotion.trim(),
                            uranusPosition: file.state.uranusPosition.trim(), uranusSector: file.state.uranusSector.trim(), uranusMotion: file.state.uranusMotion.trim(),
                            neptunePosition: file.state.neptunePosition.trim(),neptuneSector: file.state.neptuneSector.trim(), neptuneMotion: file.state.neptuneMotion.trim(),
                            plutoPosition: file.state.plutoPosition.trim(), plutoSector: file.state.plutoSector.trim(), plutoMotion: file.state.plutoMotion.trim()
                        }
            
                        file.handleEventFormSubmitState(newEvent)
                    };
                }
                // , { language: 'en', key: '' }
            );
        // If the city name was not approved
        } else {
            file.toastFunction("error", "City Name Invalid")
        }
    };

    cityValidation = () => {
        // Empty city input
        if (this.props.state.cityInput === "") {
            return
        // City name not approved
        } else if (this.props.state.cityInput && this.props.state.cityResult === "") {
            return "is-invalid"
        // City name approved
        } else {
            return "is-valid"
        }
    }

    render() {
        return (
            <div id="EventForm">
                <br />
                <h3>Add an Event</h3>
                <form onSubmit={this.handleEventFormSubmit}>
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
                                className={"form-control " + this.cityValidation()}
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
                            
                            <PlanetForm state={this.props.state}
                                eventFormInputChange={this.props.eventFormInputChange}
                                planetLower="mercury" planetCaps="Mercury"
                            />

                            <PlanetForm state={this.props.state}
                                eventFormInputChange={this.props.eventFormInputChange}
                                planetLower="venus" planetCaps="Venus"
                            />
                        </div>

                        <div className="col-sm-12 col-md-6">
                            <PlanetForm state={this.props.state}
                                eventFormInputChange={this.props.eventFormInputChange}
                                planetLower="mars" planetCaps="Mars"
                            />

                            <PlanetForm state={this.props.state}
                                eventFormInputChange={this.props.eventFormInputChange}
                                planetLower="jupiter" planetCaps="Jupiter"
                            />

                            <PlanetForm state={this.props.state}
                                eventFormInputChange={this.props.eventFormInputChange}
                                planetLower="saturn" planetCaps="Saturn"
                            />

                            <PlanetForm state={this.props.state}
                                eventFormInputChange={this.props.eventFormInputChange}
                                planetLower="uranus" planetCaps="Uranus"
                            />

                            <PlanetForm state={this.props.state}
                                eventFormInputChange={this.props.eventFormInputChange}
                                planetLower="neptune" planetCaps="Neptune"
                            />

                            <PlanetForm state={this.props.state}
                                eventFormInputChange={this.props.eventFormInputChange}
                                planetLower="pluto" planetCaps="Pluto"
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