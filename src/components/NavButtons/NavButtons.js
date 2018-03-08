import React, {Component} from "react";
import "./NavButtons.css";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";

class NavButtons extends Component {
    clearLoginForm = () => {
        this.props.objSetState({
            loginFormName: "",
            loginFormPassword: ""
        })
    }

    clearRegisterForm = () => {
        this.props.objSetState({
            registerFormName: "",
            registerFormPassword: "",
            registerFormPasswordConfirm: ""
        })
    }

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
                                    onClick={() => this.clearLoginForm()}>
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
                                    onClick={() => this.clearRegisterForm()}>
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

                <LoginModal
                    handleLoginFormSubmit={this.props.handleLoginFormSubmit}
                    loginFormInputChange={this.props.loginFormInputChange}
                    state={this.props.state}
                    objSetState={this.props.objSetState}
                />

                <RegisterModal
                    handleRegisterFormSubmit={this.props.handleRegisterFormSubmit}
                    objSetState={this.props.objSetState}
                    state={this.props.state}
                />
            </div>
        );
    }
}

export default NavButtons;