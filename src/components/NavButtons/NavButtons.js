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
                                <button
                                    type="button"
                                    className="btn btn-outline-dark btn-lg nav-button"
                                    data-toggle="collapse"
                                    data-target="#AboutSection"
                                    aria-expanded="false"
                                    aria-controls="#AboutSection">
                                        About
                                </button>
                            </li>
                            <li className="nav-space"></li>                
                            <li className="nav-item">
                                {(this.props.state.loginName)
                                ?<button
                                    onClick={() => this.props.userLogout()}
                                    type="button"
                                    className="btn btn-outline-dark btn-lg nav-button" 
                                    id="loginModalBtn">
                                        Logout
                                </button>   
                                :<button
                                    type="button"
                                    className="btn btn-outline-dark btn-lg nav-button" 
                                    data-toggle="modal"
                                    data-target="#loginModal"
                                    id="loginModalBtn"
                                    onClick={() => this.props.clearLoginForm()}>
                                        Login
                                </button>
                                }
                            </li>
                            <li className="nav-space"></li>
                            <li className="nav-item">
                                <button type="button"
                                    className="btn btn-outline-dark btn-lg nav-button"
                                    data-toggle="modal"
                                    data-target="#registerModal"
                                    onClick={() => this.props.clearRegisterForm()}>
                                        Sign Up
                                </button>
                            </li>
                        </ul>
                    </div>
                    <p id="loginMessage"
                        className="nav-item navbar-text col-md-3">
                        <span id="login-span">
                            {(this.props.state.loginName)
                                ? <span title="Logout" onClick={() => this.props.userLogout()}>Hello {this.props.state.loginName}!</span> 
                                : <span title="Login" onClick={() => document.getElementById("loginModalBtn").click()}>
                                    Login to save events</span>}
                        </span>
                    </p>
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
                                <form className="form-signin" onSubmit={this.props.handleLoginFormSubmit}>
                                    <br />
                                    <label htmlFor="inputNameLogin" className="sr-only">Username</label>
                                    <input
                                        value={this.props.state.loginFormName}
                                        onChange={this.props.loginFormInputChange.bind(this)}
                                        name="loginFormName"
                                        pattern="[a-zA-Z0-9]+"
                                        title="Username should only contain letters or numbers with no spaces"
                                        minLength="5"
                                        maxLength="25"
                                        type="text"
                                        id="inputNameLogin"
                                        className="form-control"
                                        placeholder="Username"
                                        required autoFocus />
                                    <br />
                                    <label htmlFor="inputPasswordLogin" className="sr-only">Password</label>
                                    <input
                                        value={this.props.state.loginFormPassword}
                                        onChange={this.props.loginFormInputChange.bind(this)}
                                        name="loginFormPassword"
                                        pattern="[a-zA-Z0-9]+"
                                        title="Password should only contain letters or numbers with no spaces"
                                        minLength="5"
                                        maxLength="25"
                                        type="password"
                                        id="inputPasswordLogin"
                                        className="form-control"
                                        placeholder="Password"
                                        required />
                                    <br />
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </form>
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
                                <form className="form-signin" onSubmit={this.props.handleRegisterFormSubmit}>
                                    <br />
                                    <label htmlFor="inputNameRegister" className="sr-only">Username</label>
                                    <input
                                        value={this.props.state.registerFormName}
                                        onChange={this.props.registerFormInputChange.bind(this)}
                                        name="registerFormName"
                                        pattern="[a-zA-Z0-9]+"
                                        title="Username should only contain letters or numbers with no spaces"
                                        minLength="5"
                                        maxLength="25"
                                        type="text"
                                        id="inputNameRegister"
                                        className="form-control"
                                        placeholder="Username"
                                        required
                                        autoFocus />
                                    <br />
                                    {/* <label htmlFor="inputEmailRegister" className="sr-only">Email Address</label>
                                    <input type="email" id="inputEmailRegister" className="form-control" placeholder="Email Address" required autoFocus />
                                    <br /> */}
                                    <label htmlFor="inputPasswordRegister" className="sr-only">Password</label>
                                    <input
                                        value={this.props.state.registerFormPassword}
                                        onChange={this.props.registerFormInputChange.bind(this)}
                                        name="registerFormPassword"
                                        pattern="[a-zA-Z0-9]+"
                                        title="Password should only contain letters or numbers with no spaces"
                                        minLength="5"
                                        maxLength="25"
                                        type="password"
                                        id="inputPasswordRegister"
                                        className="form-control"
                                        placeholder="Password"
                                        required />
                                    <br />
                                    <label htmlFor="inputPasswordRegisterConfirm" className="sr-only">Password</label>
                                    <input
                                        value={this.props.state.registerFormPasswordConfirm}
                                        onChange={this.props.registerFormInputChange.bind(this)}
                                        name="registerFormPasswordConfirm"
                                        pattern="[a-zA-Z0-9]+"
                                        title="Password should only contain letters or numbers with no spaces"
                                        minLength="5"
                                        maxLength="25"
                                        type="password"
                                        id="inputPasswordRegisterConfirm"
                                        className="form-control"
                                        placeholder="Confirm Password"
                                        required />
                                    <br />
                                    <div className="modal-footer">
                                        <button
                                            type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default NavButtons;