import React, {Component} from "react";
import "./NavButtons.css";

class NavButtons extends Component {
    render() {
        return (
        <div className="container-fluid" id="navButtons">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-sm-12 col-md-6" id="button-div">
                    <ul className="nav nav-pills justify-content-center">
                        <li className="nav-item">
                            <button type="button" className="btn btn-outline-dark btn-lg nav-button">About</button>
                        </li>
                        <li className="nav-space"></li>                
                        <li className="nav-item">
                            <button type="button" className="btn btn-outline-dark btn-lg nav-button">Login</button>
                        </li>
                        <li className="nav-space"></li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-outline-dark btn-lg nav-button">Register</button>
                        </li>
                    </ul>
                </div>
                <p id="loginMessage" className="nav-item navbar-text col-md-3" ><span id="login-span">Login to save events</span></p>
            </div>
        </div>
        );
    }
}

export default NavButtons;