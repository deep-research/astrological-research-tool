import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import Navbar from "../../components/Navbar"

class HomePage extends Component {
    render() {
        return (
        <div>
          <Navbar />
          {/* <Link to={`./index.html`}>click here</Link><br /> */}
          {/* <Link to={`./`}>click here</Link> */}
        </div>
        );
    }
}

export default HomePage;