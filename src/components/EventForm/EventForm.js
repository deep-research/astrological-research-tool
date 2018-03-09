import React, {Component} from "react";
import "./EventForm.css";
import MainSection from "./FormSections/MainSection"
import OmenSection from "./FormSections/OmenSection"
import SunSection from "./FormSections/SunSection"
import MoonSection from "./FormSections/MoonSection"
import PlanetSection from "./FormSections/PlanetSection";
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
                            <MainSection
                                state={this.props.state}
                                eventFormInputChange={this.eventFormInputChange}
                                cityValidation={this.cityValidation}
                            />

                            <OmenSection
                                state={this.props.state}
                                eventFormInputChange={this.eventFormInputChange}
                            />                           

                            <SunSection
                                state={this.props.state}
                                eventFormInputChange={this.eventFormInputChange}
                            />

                            <MoonSection
                                state={this.props.state}
                                eventFormInputChange={this.eventFormInputChange}
                            />
                            
                            <PlanetSection
                                state={this.props.state}
                                eventFormInputChange={this.eventFormInputChange}
                                planetLower="mercury" planetCaps="Mercury"
                            />

                            <PlanetSection state={this.props.state}
                                eventFormInputChange={this.eventFormInputChange}
                                planetLower="venus" planetCaps="Venus"
                            />
                        </div>

                        <div className="col-sm-12 col-md-6">
                            <PlanetSection
                                state={this.props.state}
                                eventFormInputChange={this.eventFormInputChange}
                                planetLower="mars" planetCaps="Mars"
                            />

                            <PlanetSection
                                state={this.props.state}
                                eventFormInputChange={this.eventFormInputChange}
                                planetLower="jupiter" planetCaps="Jupiter"
                            />

                            <PlanetSection
                                state={this.props.state}
                                eventFormInputChange={this.eventFormInputChange}
                                planetLower="saturn" planetCaps="Saturn"
                            />

                            <PlanetSection
                                state={this.props.state}
                                eventFormInputChange={this.eventFormInputChange}
                                planetLower="uranus" planetCaps="Uranus"
                            />

                            <PlanetSection
                                state={this.props.state}
                                eventFormInputChange={this.eventFormInputChange}
                                planetLower="neptune" planetCaps="Neptune"
                            />

                            <PlanetSection
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