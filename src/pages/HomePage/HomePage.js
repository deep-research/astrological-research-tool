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
import moment from "moment-timezone";

class HomePage extends Component {
    state = {
        events: [],
        name: "",
        cityInput: "",
        cityResult: "",
        cityLat: "",
        cityLng: "",
        date: "",
        time: "",
        localTime: "",
        utcTime: "",
        timeZoneName: "",
        weather: "",
        news: "",
        sun: "",
        season: "",
        moon: "",
        phase: "",
        mercuryPosition: "",
        mercurySector: "",
        mercuryMotion: "",
        venusPosition: "",
        venusSector: "",
        venusMotion: "",
        marsPosition: "",
        marsSector: "",
        marsMotion: "",
        jupiterPosition: "",
        jupiterSector: "",
        jupiterMotion: "",
        saturnPosition: "",
        saturnSector: "",
        saturnMotion: "",
        uranusPosition: "",
        uranusSector: "",
        uranusMotion: "",
        neptunePosition: "",
        neptuneSector: "",
        neptuneMotion: "",
        plutoPosition: "",
        plutoSector: "",
        plutoMotion: "",
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

        const file = this;

        if (this.state.cityResult) {
            const year = this.state.date.slice(0,4);
            const month = this.state.date.slice(5,7);
            const day = this.state.date.slice(8,10);
            const hours = this.state.time.slice(0,2);
            const minutes = this.state.time.slice(3,5);
            const lat = this.state.cityLat;
            const lng = this.state.cityLng;

            timezoner.getTimeZone(
                lat,
                lng,
                function (err, data) {
                    if (err) {
                        console.log(err);
                    } else {                   
                        const timeZoneName = data.timeZoneName;
                        const timeZoneId = data.timeZoneId;

                        const localMoment = moment.tz(`${year}-${month}-${day} ${hours}:${minutes}`,
                            timeZoneId)
                        const localTime = moment(localMoment).format("h:mm a, MMM Do YYYY");
                        const utcTime = moment.utc(localMoment).format("h:mm a, MMM Do YYYY");

                        // const dstOffset = data.dstOffset;
                        // const rawOffset = data.rawOffset;
                        // const toHHMMSS = (seconds) => {
                        //     var sec_num = parseInt(seconds, 10); // don't forget the second param
                        //     var hours   = Math.floor(sec_num / 3600);
                        //     var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
                        //     var seconds = sec_num - (hours * 3600) - (minutes * 60);                        
                        //     if (hours   < 10) {hours   = "0"+hours;}
                        //     if (minutes < 10) {minutes = "0"+minutes;}
                        //     if (seconds < 10) {seconds = "0"+seconds;}
                        //     return hours+':'+minutes+':'+seconds;
                        // }
                        // if (rawOffset >= 0) {
                        //     console.log("UTC+" + toHHMMSS(data.rawOffset))
                        // } else {
                        //     console.log("UTC-" + toHHMMSS(data.rawOffset).slice(2))
                        // }
                        // if (dstOffset >= 0) {
                        //     console.log("UTC+" + toHHMMSS(data.dstOffset))
                        // } else {
                        //     console.log("UTC-" + toHHMMSS(data.dstOffset).slice(2))
                        // }

                        const newEvent = {
                            name: file.state.name.trim(),
                            city: file.state.cityResult,
                            lat: lat,
                            lng: lng,
                            key: file.state.events.length + 1,
                            localTime: localTime,
                            utcTime: utcTime,
                            timeZoneName: timeZoneName,
                            weather: file.state.weather.trim(),
                            news: file.state.news.trim(),
                            sun: file.state.sun.trim(),
                            season: file.state.season.trim(),
                            moon: file.state.moon.trim(),
                            phase: file.state.phase.trim(),
                            mercuryPosition: file.state.mercuryPosition.trim(),
                            mercurySector: file.state.mercurySector.trim(),
                            mercuryMotion: file.state.mercuryMotion.trim(),
                            venusPosition: file.state.venusPosition.trim(),
                            venusSector: file.state.venusSector.trim(),
                            venusMotion: file.state.venusMotion.trim(),
                            marsPosition: file.state.marsPosition.trim(),
                            marsSector: file.state.marsSector.trim(),
                            marsMotion: file.state.marsMotion.trim(),
                            jupiterPosition: file.state.jupiterPosition.trim(),
                            jupiterSector: file.state.jupiterSector.trim(),
                            jupiterMotion: file.state.jupiterMotion.trim(),
                            saturnPosition: file.state.saturnPosition.trim(),
                            saturnSector: file.state.saturnSector.trim(),
                            saturnMotion: file.state.saturnMotion.trim(),
                            uranusPosition: file.state.uranusPosition.trim(),
                            uranusSector: file.state.uranusSector.trim(),
                            uranusMotion: file.state.uranusMotion.trim(),
                            neptunePosition: file.state.neptunePosition.trim(),
                            neptuneSector: file.state.neptuneSector.trim(),
                            neptuneMotion: file.state.neptuneMotion.trim(),
                            plutoPosition: file.state.plutoPosition.trim(),
                            plutoSector: file.state.plutoSector.trim(),
                            plutoMotion: file.state.plutoMotion.trim()
                        }
            
                        file.setState({
                            events: [...file.state.events, newEvent],
                            name: "",
                            cityInput: "",
                            cityResult: "",
                            cityLat: "",
                            cityLng: "",
                            date: "",
                            time: "",
                            localTime: "",
                            utcTime: "",
                            timeZoneName: "",
                            weather: "",
                            news: "",
                            sun: "",
                            season: "",
                            moon: "",
                            phase: "",
                            mercuryPosition: "",
                            mercurySector: "",
                            mercuryMotion: "",
                            venusPosition: "",
                            venusSector: "",
                            venusMotion: "",
                            marsPosition: "",
                            marsSector: "",
                            marsMotion: "",
                            jupiterPosition: "",
                            jupiterSector: "",
                            jupiterMotion: "",
                            saturnPosition: "",
                            saturnSector: "",
                            saturnMotion: "",
                            uranusPosition: "",
                            uranusSector: "",
                            uranusMotion: "",
                            neptunePosition: "",
                            neptuneSector: "",
                            neptuneMotion: "",
                            plutoPosition: "",
                            plutoSector: "",
                            plutoMotion: "",
                        });
                    };
                }
                // , { language: 'en', key: '' }
            );
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

    removeEvent = (eventKey) => {
        const oldArray = this.state.events;

        const newArray = oldArray.filter(obj => {
            return obj.key !== eventKey;
        });

        this.setState({
            events: newArray
        });
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
                <EventDisplay state={this.state} removeEvent={this.removeEvent} />
            </div>
            {/* <Link to={`./index.html`}>click here</Link><br /> */}
            {/* <Link to={`./`}>click here</Link> */}         
        </div>
        );
    }
}

export default HomePage;