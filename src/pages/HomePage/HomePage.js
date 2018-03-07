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
import cities from "../../utils/cities.json";
import { ToastContainer, toast } from "react-toastify";
import bcrypt from "bcryptjs";

class HomePage extends Component {
    state = {
        events: [], savedEvents: [],
        name: "", cityInput: "", cityResult: "", cityLat: "", cityLng: "",
        date: "", time: "", localTime: "", utcTime: "", timeZoneName: "",
        weather: "", news: "",
        sun: "", season: "",
        lunarPosition: "", lunarSector: "", lunarPhase: "",
        mercuryPosition: "", mercurySector: "", mercuryMotion: "",
        venusPosition: "", venusSector: "", venusMotion: "",
        marsPosition: "", marsSector: "", marsMotion: "",
        jupiterPosition: "", jupiterSector: "", jupiterMotion: "",
        saturnPosition: "", saturnSector: "", saturnMotion: "",
        uranusPosition: "", uranusSector: "", uranusMotion: "",
        neptunePosition: "", neptuneSector: "", neptuneMotion: "",
        plutoPosition: "", plutoSector: "", plutoMotion: "",
        registerFormName: "", registerFormPassword: "", registerFormPasswordConfirm: "",
        loginFormName: "", loginFormPassword: "", loginName: "", loginUserId: "",
        removeUserText: "Click to Remove User", removeUserColor: "removeUserGrey"
    };

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

    loginFormInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }

    handleLoginFormSubmit = event => {
        event.preventDefault()

        const username = this.state.loginFormName;
        const password = this.state.loginFormPassword;

        API.findUser({
            username: username
        })
        .then(res => {
            // If a user was found
            if (res.data) {
                const dbUser = res.data.username;
                const dbHash = res.data.password;
                const dbUserId = res.data._id;
                const bcryptCheck = bcrypt.compareSync(password, dbHash);

                // If the password is correct, log in
                if (bcryptCheck) {
                    this.setState({
                        loginName: dbUser,
                        loginUserId: dbUserId,
                        loginFormName: "",
                        loginFormPassword: ""
                    }, () => {
                        document.getElementById("loginModal").click();

                        // Display the users events
                        this.displaySavedEvents(this.state.loginUserId)

                        this.toastFunction("info", "Login Submitted Successfully!")
                    });
                // If the password doesn't match, don't log in
                } else {
                    this.toastFunction("error", "Invalid Password!")

                    this.setState({
                        loginFormPassword: ""
                    })
                }
            // If no user was found
            } else {
                this.toastFunction("error", "Invalid Username!")
            }
        })
        // If the database query fails
        .catch(err => {
            console.log(err)

            this.toastFunction("error", "Invalid Username or Password!")

            this.setState({
                loginFormPassword: "",
                loginFormName: ""
            })
        });
    }

    handleRegisterFormSubmit = event => {
        event.preventDefault()

        const username = this.state.registerFormName;
        const password = this.state.registerFormPassword;
        const passwordConfirm = this.state.registerFormPasswordConfirm;

        // If the password confirmation doesn't match
        if (password !== passwordConfirm) {
            this.toastFunction("error", "Password Confirmation Failed!")

            this.setState({
                registerFormPassword: "",
                registerFormPasswordConfirm: ""
            })
        // If the password confirmation matches
        } else {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);

            // Add the user into the database
            API.saveUser({
                username: username,
                password: hash
            })
            .then(res => {
                const dbUserId = res.data._id;
                document.getElementById("registerModal").click();

                this.toastFunction("info", "Registration Submitted Successfully!")

                // Store info for the user in state
                this.setState({
                    loginName: username,
                    loginUserId: dbUserId,
                    loginFormName: "",
                    loginFormPassword: ""
                });
            })
            // If the username is already in the database
            .catch(err => {
                console.log(err)

                this.toastFunction("error", "Invalid Username!")

                this.setState({
                    registerFormName: ""
                })
            });
        }
    }

    clearRegisterForm = () => {
        this.setState({
            registerFormName: "",
            registerFormPassword: "",
            registerFormPasswordConfirm: ""
        })
    }

    clearLoginForm = () => {
        this.setState({
            loginFormName: "",
            loginFormPassword: ""
        })
    }

    eventFormInputChange = event => {
        const { name, value } = event.target;

        this.setState(
            {[name]: value},
            () => {
                // If you're updating the city name
                if (name === "cityInput") {
                    const userCity = this.state.cityInput.toLowerCase();
                    
                    // Get the index of a matching city
                    var indexOfCity = cities.map((x) =>
                        {return x.name.toLowerCase(); }).indexOf(userCity);

                    // If a match was found, extract the data
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
                    // If no match is found, clear the city data
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

    // showToast can prevent a message when an event is saved instead of deleted
    removeEvent = (eventKey, showToast=true) => {
        const oldArray = this.state.events;

        // Remove the event from the event array
        const newArray = oldArray.filter(obj => {
            return obj.key !== eventKey;
        });

        // Remove the event from the database
        this.setState({
            events: newArray
        }, () => {
            if (showToast) {
                this.toastFunction("info", "Event Removed Successfully!")
            }
        });
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
        this.setState(obj)
    }

    render() {
        return (
            <div>
                <Navbar/>
                <NavButtons
                    state={this.state}
                    loginFormInputChange={this.loginFormInputChange}
                    handleLoginFormSubmit={this.handleLoginFormSubmit}
                    handleRegisterFormSubmit={this.handleRegisterFormSubmit}
                    clearRegisterForm={this.clearRegisterForm}
                    clearLoginForm={this.clearLoginForm}
                    userLogout={this.userLogout}
                    objSetState={this.objSetState}
                />
                <div className="container">
                    <AboutSection />
                    <EventForm
                        state={this.state}
                        toastFunction={this.toastFunction}
                        eventFormInputChange={this.eventFormInputChange}
                        objSetState={this.objSetState}
                    />
                    <EventDisplay
                        state={this.state}
                        removeEvent={this.removeEvent}
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