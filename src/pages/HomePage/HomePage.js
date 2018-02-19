import React, {Component} from "react";
// import { Link } from "react-router-dom";
import "./HomePage.css";
import Navbar from "../../components/Navbar";
import NavButtons from "../../components/NavButtons";
import AboutSection from "../../components/AboutSection";
import EventForm from "../../components/EventForm";
import EventDisplay from "../../components/EventDisplay";
import cities from "../../utils/cities.json";
import timezoner from "timezoner";
import momentTimezone from "moment-timezone";

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
            const year = this.state.date.slice(0,4);
            const month = this.state.date.slice(5,7);
            const day = this.state.date.slice(8,10);
            const hours = this.state.time.slice(0,2);
            const minutes = this.state.time.slice(3,5);
            const lat = this.state.cityLat;
            const lng = this.state.cityLng;
            var eventDate = new Date(year, month, day, hours, minutes);

            timezoner.getTimeZone(
                lat,
                lng,
                function (err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        const toHHMMSS = (seconds) => {
                            var sec_num = parseInt(seconds, 10); // don't forget the second param
                            var hours   = Math.floor(sec_num / 3600);
                            var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
                            var seconds = sec_num - (hours * 3600) - (minutes * 60);
                        
                            if (hours   < 10) {hours   = "0"+hours;}
                            if (minutes < 10) {minutes = "0"+minutes;}
                            if (seconds < 10) {seconds = "0"+seconds;}
                            return hours+':'+minutes+':'+seconds;
                        }
                        const timeZoneName = data.timeZoneName;
                        const dstOffset = data.dstOffset;
                        const timeZoneId = data.timeZoneId;
                        const rawOffset = data.rawOffset;



                        if (rawOffset >= 0) {
                            console.log("UTC+" + toHHMMSS(data.rawOffset))
                        } else {
                            console.log("UTC-" + toHHMMSS(data.rawOffset).slice(2))
                        }
                    }
                },
                { language: 'en', key: "" }
            );

            const newEvent = {
                name: this.state.name,
                city: this.state.cityResult,
                lat: lat,
                lng: lng,
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