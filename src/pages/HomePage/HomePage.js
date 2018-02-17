import React, {Component} from "react";
// import { Link } from "react-router-dom";
import "./HomePage.css";
import Navbar from "../../components/Navbar"
import NavButtons from "../../components/NavButtons"
import AboutSection from "../../components/AboutSection"
import EventForm from "../../components/EventForm"
import EventDisplay from "../../components/EventDisplay"

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
        this.setState({
            [name]: value
        });
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