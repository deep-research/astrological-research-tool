import React, {Component} from "react";
// import { Link } from "react-router-dom";
import "./HomePage.css";
import Navbar from "../../components/Navbar";
import NavButtons from "../../components/NavButtons";
import AboutSection from "../../components/AboutSection";
import EventForm from "../../components/EventForm";
import EventDisplay from "../../components/EventDisplay";
import RemoveUser from "../../components/RemoveUser";
import API from "../../utils/API";
import { ToastContainer, toast } from "react-toastify";
import state_init from "./state_init.js"

class HomePage extends Component {
    state = state_init

    toastFunction = (type, text) => {
        toast[type](text, {
            position: toast.POSITION.BOTTOM_CENTER
        })
    }

    userLogout = (showToast=true) => {
        this.setState({
            loginName: "",
            loginUserId: "",
            savedEvents: [],
            removeUserText: "Click to Remove User",
            removeUserColor: "removeUserGrey"
        }, () => {
            if (showToast) {
                this.toastFunction("info", "Logged Out Successfully!")
            }
        })
    }

    displaySavedEvents = (userId) => {
        // Retrieve the events from the database
        API.getEvents({
            userId: userId
        })
        .then(res => {
            // Populate event array with the saved events
            if (res.data.events.length > 0) {
                const eventArray = []
                for (const i in res.data.events) {
                    eventArray.push(res.data.events[i])
                }

                this.setState({
                    savedEvents: eventArray
                })
            // Empty array if no events have been saved
            } else {
                this.setState({
                    savedEvents: []
                })                
            }
        })
        .catch(err => {
            console.log(err);
        });            
    }

    objSetState = (obj) => {
        return new Promise((resolve, reject)=>{
            this.setState(obj)
            
            resolve();
        });
    }

    render() {
        return (
            <div>
                <Navbar/>
                <NavButtons
                    state={this.state}
                    displaySavedEvents={this.displaySavedEvents}
                    userLogout={this.userLogout}
                    objSetState={this.objSetState}
                    toastFunction={this.toastFunction}
                />
                <div className="container">
                    <AboutSection />
                    <EventForm
                        state={this.state}
                        toastFunction={this.toastFunction}
                        objSetState={this.objSetState}
                    />
                    <EventDisplay
                        state={this.state}
                        objSetState={this.objSetState}
                        toastFunction={this.toastFunction}
                        displaySavedEvents={this.displaySavedEvents}
                    />
                    <RemoveUser
                        state={this.state}
                        objSetState={this.objSetState}
                        userLogout={this.userLogout}
                    />
                </div>
                <ToastContainer autoClose={2250} />
                {/* <Link to={`./index.html`}>click here</Link><br /> */}
                {/* <Link to={`./`}>click here</Link> */}         
            </div>
        );
    }
}

export default HomePage;