import React, {Component} from "react";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark
                d-flex justify-content-around py-3 header"
                id="topBar">
                <a className="navbar-brand" id="title" href=".">The Astrological Research Tool</a>
            </nav>
        </div>
        );
    }
}

export default Navbar;