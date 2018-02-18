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
        city: "",
        date: "",
        time: ""
    };

    eventFormInputChange = event => {
        const { name, value } = event.target;
        this.setState(
            {[name]: value},
            () => {
                const userCity = this.state.city.toLowerCase();
                alert(userCity)
                
                var indexOfCity = cities.map((x) => 
                    {return x.name.toLowerCase(); }).indexOf(userCity);
                if (cities[indexOfCity])  {
                    const cityName = cities[indexOfCity].name;
                    const cityLat = cities[indexOfCity].lat;
                    const cityLng = cities[indexOfCity].lng;
                } else {
                    alert("Not found")
                }
            }
        );
    };
    
    handleEventFormSubmit = event => {
        event.preventDefault()

        const newEvent = {
            name: this.state.name,
            city: this.state.city,
            date: this.state.date,
            time: this.state.time,
            key: this.state.events.length + 1
        }

        // console.log(newEvent)

        this.setState({
            events: [...this.state.events, newEvent],
            name: "",
            city: "",
            date: "",
            time: ""
        }
        // ,() => console.log(this.state.events)
        )
    };

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