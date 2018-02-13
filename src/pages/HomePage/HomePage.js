import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

class Navbar extends Component {
    render() {
        return (
        <div>
          <h1>sdiosdjods sdocdsocjdso cijsdc sdocjdsocdisjc</h1>
          <li>
            <Link to={`./index.html`}>click here</Link>
          </li>
        </div>
        );
    }
}

export default Navbar;