import React, {Component} from "react";
// import { Link } from "react-router-dom";
import "./HomePage.css";
import Navbar from "../../components/Navbar"
import NavButtons from "../../components/NavButtons"
import AboutSection from "../../components/AboutSection"
import EventForm from "../../components/EventForm"
import EventDisplay from "../../components/EventDisplay"
import cities from "../../utils/cities.json"

class HomePage extends Component {
    state = {
        events: [],
        name: "",
        cityInput: "",
        cityResult: "",
        cityLat: "",
        cityLng: "",
        date: "",
        time: ""
    };

    eventFormInputChange = event => {
        const { name, value } = event.target;
        this.setState(
            {[name]: value},
            () => {
                if (name === "cityInput") {
                    console.log(this.state)
                    const userCity = this.state.cityInput.toLowerCase();
                    
                    var indexOfCity = cities.map((x) => 
                        {return x.name.toLowerCase(); }).indexOf(userCity);
                    if (cities[indexOfCity])  {
                        const cityName = cities[indexOfCity].name;
                        const cityLat = cities[indexOfCity].lat;
                        const cityLng = cities[indexOfCity].lng;

                        this.setState({
                                cityResult: cityName,
                                cityLat: cityLat,
                                cityLng: cityLng 
                            }
                            // , () => {}
                        );
                    } else {
                        this.setState({
                            cityResult: "",
                            cityLat: "",
                            cityLng: ""                             
                        })
                    }
                };
            }
        );
    };
    
    handleEventFormSubmit = event => {
        event.preventDefault()

        if (this.state.cityResult) {
            const newEvent = {
                name: this.state.name,
                city: this.state.cityResult,
                lat: this.state.cityLat,
                lng: this.state.cityLng,
                date: this.state.date,
                time: this.state.time,
                key: this.state.events.length + 1
            }

            this.setState({
                events: [...this.state.events, newEvent],
                name: "",
                cityInput: "",
                cityResult: "",
                cityLat: "",
                cityLng: "",
                date: "",
                time: ""
            });
        };
    };

    cityValidation = () => {
        if (this.state.cityInput === "") {
            return
        } else if (this.state.cityInput && this.state.cityResult === "") {
            return "is-invalid"
        } else {
            return "is-valid"
        }
    }

    render() {
        return (
        <div>
            <Navbar/>
            <NavButtons />
            <div className="container">
                <AboutSection />
                <EventForm
                    state={this.state}
                    eventFormInputChange={this.eventFormInputChange}
                    handleEventFormSubmit={this.handleEventFormSubmit}
                    cityValidation= {this.cityValidation}
                />
                <EventDisplay state={this.state} />
            </div>
            {/* <Link to={`./index.html`}>click here</Link><br /> */}
            {/* <Link to={`./`}>click here</Link> */}         
        </div>
        );
    }
}

export default HomePage;