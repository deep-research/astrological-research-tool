import React, {Component} from "react";
import "./EventForm.css";
import PlanetForm from "./PlanetForm.js";
import handleEventFormSubmit from "./handleEventFormSubmit.js"
import cities from "../../utils/cities.json";

class EventForm extends Component {
    eventFormInputChange = event => {
        const { name, value } = event.target;

        this.props.objSetState(
            {[name]: value})
            .then(() => {
                // If you're updating the city name
                if (name === "cityInput") {
                    const userCity = this.props.state.cityInput.toLowerCase();
                    
                    // Get the index of a matching city
                    var indexOfCity = cities.map((x) =>
                        {return x.name.toLowerCase(); }).indexOf(userCity);

                    // If a match was found, extract the data
                    if (cities[indexOfCity])  {
                        const cityName = cities[indexOfCity].name;
                        const cityLat = cities[indexOfCity].lat;
                        const cityLng = cities[indexOfCity].lng;

                        this.props.objSetState({
                                cityResult: cityName,
                                cityLat: cityLat,
                                cityLng: cityLng 
                            }
                        );
                    // If no match is found, clear the city data
                    } else {
                        this.props.objSetState({
                            cityResult: "",
                            cityLat: "",
                            cityLng: ""                             
                        })
                    }
                };
            }
        );
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
                <form onSubmit={handleEventFormSubmit(this.props)}>
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <label htmlFor="eventFormName">Event Name <span className="star">*</span></label>
                            <input required
                                type="text"
                                maxLength="40"
                                value={this.props.state.name}
                                onChange={this.eventFormInputChange}
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
                                onChange={this.eventFormInputChange}
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
                                onChange={this.eventFormInputChange}
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
                                onChange={this.eventFormInputChange}
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
                                onChange={this.eventFormInputChange}
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
                                onChange={this.eventFormInputChange}
                                name="news"
                                className="form-control"
                                id="eventFormNews"
                                placeholder="Top Stories"
                            />
                            <div className="formSpacer"></div>

                            <label htmlFor="eventFormSun">The Sun (Position, Season)</label>
                            <select
                                value={this.props.state.sun}
                                onChange={this.eventFormInputChange.bind(this)}
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
                                onChange={this.eventFormInputChange.bind(this)}
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
                                onChange={this.eventFormInputChange.bind(this)}
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
                                onChange={this.eventFormInputChange.bind(this)}
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
                                onChange={this.eventFormInputChange.bind(this)}
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
                                eventFormInputChange={this.eventFormInputChange}
                                planetLower="mercury" planetCaps="Mercury"
                            />

                            <PlanetForm state={this.props.state}
                                eventFormInputChange={this.eventFormInputChange}
                                planetLower="venus" planetCaps="Venus"
                            />
                        </div>

                        <div className="col-sm-12 col-md-6">
                            <PlanetForm
                                state={this.props.state}
                                eventFormInputChange={this.eventFormInputChange}
                                planetLower="mars" planetCaps="Mars"
                            />

                            <PlanetForm
                                state={this.props.state}
                                eventFormInputChange={this.eventFormInputChange}
                                planetLower="jupiter" planetCaps="Jupiter"
                            />

                            <PlanetForm
                                state={this.props.state}
                                eventFormInputChange={this.eventFormInputChange}
                                planetLower="saturn" planetCaps="Saturn"
                            />

                            <PlanetForm
                                state={this.props.state}
                                eventFormInputChange={this.eventFormInputChange}
                                planetLower="uranus" planetCaps="Uranus"
                            />

                            <PlanetForm
                                state={this.props.state}
                                eventFormInputChange={this.eventFormInputChange}
                                planetLower="neptune" planetCaps="Neptune"
                            />

                            <PlanetForm
                                state={this.props.state}
                                eventFormInputChange={this.eventFormInputChange}
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