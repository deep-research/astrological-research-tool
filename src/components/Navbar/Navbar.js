import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top d-flex justify-content-around py-3 header">
                <a className="navbar-brand" id="title" href=".">The Astrological Research Tool</a>
          </nav>           
          {/* <Link to={`./index.html`}>click here</Link><br /> */}
          {/* <Link to={`./`}>click here</Link> */}
        </div>
        );
    }
}

export default Navbar;