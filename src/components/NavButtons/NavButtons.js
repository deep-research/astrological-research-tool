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
                            <button type="button" className="btn btn-outline-dark btn-lg nav-button" data-toggle="collapse" data-target="#AboutSection" aria-expanded="false" aria-controls="#AboutSection">About</button>
                        </li>
                        <li className="nav-space"></li>                
                        <li className="nav-item">
                            <button type="button" className="btn btn-outline-dark btn-lg nav-button"  data-toggle="modal" data-target="#loginModal">Login</button>
                        </li>
                        <li className="nav-space"></li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-outline-dark btn-lg nav-button" data-toggle="modal" data-target="#registerModal">Sign Up</button>
                        </li>
                    </ul>
                </div>
                <p id="loginMessage" className="nav-item navbar-text col-md-3" ><span id="login-span">Login to save events</span></p>
            </div>

            <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="loginModalLabel">Please sign in</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="form-signin">
                                <br />
                                <label htmlFor="inputEmailLogin" className="sr-only">User Name</label>
                                <input type="email" id="inputEmailLogin" className="form-control" placeholder="Email address" required autoFocus />
                                <br />
                                <label htmlFor="inputPasswordLogin" className="sr-only">Password</label>
                                <input type="password" id="inputPasswordLogin" className="form-control" placeholder="Password" required />
                                <br />
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="registerModal" tabIndex="-1" role="dialog" aria-labelledby="registerModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h4 className="modal-title" id="loginModalLabel">Create a new account</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="form-signin">
                                <br />
                                <label htmlFor="inputEmailRegister" className="sr-only">User Name</label>
                                <input type="email" id="inputEmailRegister" className="form-control" placeholder="Email address" required autoFocus />
                                <br />
                                <label htmlFor="inputPasswordRegister" className="sr-only">Password</label>
                                <input type="password" id="inputPasswordRegister" className="form-control" placeholder="Password" required />
                                <br />
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        );
    }
}

export default NavButtons;