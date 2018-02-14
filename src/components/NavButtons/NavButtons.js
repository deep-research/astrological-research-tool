import React, {Component} from "react";
import "./NavButtons.css";

class NavButtons extends Component {
    render() {
        return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-sm-12 col-md-6" id="button-div">
                    <ul className="nav nav-pills justify-content-center">
                        <li className="nav-item">
                            <button type="button" className="btn btn-outline-dark btn-lg navButton">About</button>
                        </li>
                        <li className="nav-space"></li>                
                        <li className="nav-item">
                            <button type="button" className="btn btn-outline-dark btn-lg navButton">Login</button>
                        </li>
                        <li className="nav-space"></li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-outline-dark btn-lg navButton">Register</button>
                        </li>
                    </ul>
                </div>
                <p id="loginMessage" className="nav-item navbar-text col-md-3" >Login to save events</p>
            </div>
        </div>
        );
    }
}

export default NavButtons;