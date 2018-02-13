import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./NavButtons.css";

class NavButtons extends Component {
    render() {
        return (
        <div>
            <ul className="nav nav-pills justify-content-center">
                <li className="nav-item">
                    <button type="button" className="btn btn-outline-primary btn-lg">About</button>
                </li>
                <li className="nav-space"></li>                
                <li className="nav-item">
                    <button type="button" className="btn btn-outline-primary btn-lg">Login</button>
                </li>
                <li className="nav-space"></li>    
                <li className="nav-item">
                    <button type="button" className="btn btn-outline-primary btn-lg">Register</button>
                </li>
                <li className="nav-space"></li>   
                <li className="nav-item">
                    <p id="loginMessage" className="nav-item navbar-text" >Login to save events</p>
                </li>
            </ul>
          
          {/* Add links */}       
          {/* <Link to={`./index.html`}>click here</Link><br /> */}
          {/* <Link to={`./`}>click here</Link> */}
        </div>
        );
    }
}

export default NavButtons;